class V1::QuestionsController < ApiController
  def index
    questions = Question.all
    render json: questions, include: [:choices]
  end

  def show
    question = Question.find(params[:id])
    render json: question, include: [:choices]
  end

  def update
    question = Question.find(params[:id])
    if question.update(question_params)
      render json: question
    else
      render json: question.errors
    end
  end

  def create
    question = Question.new(question_params)
    if question.save
      render json: question, status: :created
    else
      render json: question.errors, status: :unprocessable_entity
    end
  end

  def destroy
    question = Question.find(params[:id])
    if question.destroy
      render json: question
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
  end
end
