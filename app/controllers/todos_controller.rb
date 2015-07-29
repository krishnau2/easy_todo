class TodosController < ApplicationController

  def index
    @tasks = Task.all_to_json
    respond_to do |format|
      format.html
      format.json {render json: @tasks}
    end
  end

  def create
    Task.create(task_params)
    @tasks = Task.all_to_json
    render json: @tasks
  end

  def destroy
    Task.find(params[:id]).delete
    @tasks = Task.all_to_json
    render json: @tasks
  end

  private

  def task_params
    params.require(:task).permit(:text, :state)
  end
end
