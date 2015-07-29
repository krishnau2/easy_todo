class TodosController < ApplicationController

  def index
    @tasks = Task.all.in_order.map{|t| {text: t.text, state: t.state}}
    respond_to do |format|
      format.html
      format.json {render json: @tasks}
    end
  end

  def create
    Task.create(task_params)
    render nothing: true
  end

  private

  def task_params
    params.require(:task).permit(:text, :state)
  end
end
