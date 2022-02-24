class Question < ApplicationRecord
  validates :content, presence: true
  has_many :choices, dependent: :destroy
end
