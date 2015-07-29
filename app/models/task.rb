class Task < ActiveRecord::Base
   scope :in_order, -> { order(created_at: :desc) }
end
