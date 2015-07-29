class Task < ActiveRecord::Base
  scope :in_order, -> { order(created_at: :desc) }

  def self.all_to_json
    self.all.in_order.map{|t| {id: t.id, text: t.text, state: t.state}}
  end
end
