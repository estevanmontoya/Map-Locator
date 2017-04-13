var React = require('react');
var LocationItem = require('./LocationItem');

var LocationList = React.createClass({
  
  render(){
    
    var self = this;
    
    var locations = this.props.locations.map(function(l){
      
      var active = self.props.activeLocationAddress == l.address;
      
      // Notice that we are passing the onClick callback of this
      // LocationList to each LocationItem.
      
      return <LocationItem address={l.address} timestamp={l.timestamp}
      active={active} onClick={self.props.onClick} />
      
    });
    
    if(!locations.length){
      return null;
    }
    
    return (
      <div>
        <h4 classname='active'>Saved Locations </h4>
          {locations}
      </div>
    )
    
  }
  
});

module.exports = LocationList;