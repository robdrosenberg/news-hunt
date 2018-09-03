class User < ApplicationRecord
  has_secure_password
  has_many :bookmarks
  validates :email, presence: true, uniqueness: true
end
