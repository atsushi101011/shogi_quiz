class V1::ChoicesController < ApiController
  def index
    choices = Choice.all
    render json: choices
  end
end
