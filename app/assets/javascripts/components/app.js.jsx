/** @jsx React.DOM */

var MainComponent = React.createClass({
  getInitialState: function () {
    return {
      task: '',
      todoList: [],
      folloUpList: [],
      doneList: []
    };
  },

  componentDidMount: function () {
    $.ajax({
      url: '/',
      dataType: 'json',
      success: function(data){
        if (this.isMounted()) {
          this.setState({todoList: data })
        }
      }.bind(this)
    });
  },
  handleChange: function(event){
    this.setState({task: event.target.value})
  },
  handleSubmit: function(newItem){
    var newList = this.state.todoList
    newList.unshift(newItem);
    this.setState({task: '', todoList: newList});
    console.log(newItem)
    $.ajax({
      url: '/todos',
      dataType: 'json',
      method: 'POST',
      data: {task: newItem},
      success: function(data){
        console.log(data)
      }
    });
  },
  render: function(){
    return(
      <div className = 'wrapper'>
        <TodoInput
            handleChange={this.handleChange}
            textValue={this.state.task}
            handleSubmit={this.handleSubmit}/>
        <TodoListView
            todoList={this.state.todoList}
            followUpList={this.state.FollowUpList}
            doneList={this.state.doneList}/>
      </div>
    );
  }
});

var TodoInput = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    var currentItem = {text: this.props.textValue, state: 'todo'};
    this.props.handleSubmit(currentItem);
  },
  render: function(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          <form role="form" className='well form-inline' onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" onChange={this.props.handleChange} value={this.props.textValue} placeholder="What's next?" className="form-control" />
            </div>
            <button type="submit" className="btn btn-inline btn-square btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
});

var TodoListView = React.createClass({
  render: function(){
    return(
      <div className='row'>
        <TodoList todoList={this.props.todoList}/>
        <FollowUpList followUpList={this.props.FollowUpList}/>
        <DoneList doneList={this.props.doneList}/>
      </div>
    );
  }
});

var TodoList = React.createClass({
  displayItem: function(item){
    return(
      <li className='list-group-item'>
        {item.text}
        <a href="#" > | Done</a>
        <a href="#" > | Follow up</a>
        <a href="#" > | Remove</a>
      </li>
    );
  },
  render: function(){
    var list = this.props.todoList
    return(
      <div className='col-md-4'>
        <div className="panel panel-default">
          <div className="panel-heading">Todos</div>
          <div className="panel-body">
            <ul className='list-group'>
              {
                list.map(this.displayItem)
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

var FollowUpList = React.createClass({

  render: function(){
    return(
      <div className='col-md-4'>
        <div className="panel panel-default">
          <div className="panel-heading">Follow ups</div>
          <div className="panel-body">
            <ul className='list-group'>
              <li className='list-group-item'>First todo </li>
              <li className='list-group-item'>Second todo </li>
              <li className='list-group-item'>Third todo </li>
              <li className='list-group-item'>Fourth todo </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

var DoneList = React.createClass({
  render: function(){
    return(
      <div className='col-md-4'>
        <div className="panel panel-default">
          <div className="panel-heading">Done!</div>
          <div className="panel-body">
            <ul className='list-group'>
              <li className='list-group-item'>First todo </li>
              <li className='list-group-item'>Second todo </li>
              <li className='list-group-item'>Third todo </li>
              <li className='list-group-item'>Fourth todo </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});



$(function(){
  React.render(<MainComponent />, document.getElementById('react-main-container'));
});