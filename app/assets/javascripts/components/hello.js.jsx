/** @jsx React.DOM */



var MainComponent = React.createClass({
  getInitialState: function () {
    return {
      
    };
  },
  handleChange: function(value){
    console.log(value);
  },
  render: function(){
    return(
      <div className = 'wrapper'>
        <TodoInput handleChange={this.handleChange}/>        
        <TodoListView />
      </div>
    );
  }
});

var TodoInput = React.createClass({
  handleChange: function(event){
    this.props.handleChange(event.target.value);
  },
  render: function(){
    return(
      <div className='row'>
        <div className='col-md-4'>
          <form role="form" className='well form-inline'>
            <div className="form-group">
              <input type="text" id="task" onChange={this.handleChange} name="task" placeholder="What's next?" className="form-control" />
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
        <TodoList />
        <FollowUpList />
        <DoneList />   
      </div>      
    );
  }
});

var TodoList = React.createClass({
  render: function(){
    return(
      <div className='col-md-4'>
        <div className="panel panel-default">
          <div className="panel-heading">Todos</div>
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