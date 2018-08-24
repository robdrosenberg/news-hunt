class User < ApplicationRecord
  has_many :bookmarks
  has_secure_password
  validates :email, presence: true, uniqueness: true
end
