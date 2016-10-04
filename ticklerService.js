/**
 * store your leads
 * store your conversions
*/

function Secretary() {
  
  var leads = boss.getList();
  var yourConversions = []
  
  
  this.getLeads = function(){
    //Go to the boss and get the leads
    //then give me the leads
    return leads;

  }
  
  this.addConversion = function(name){
    //Get lead by their name and move them to the conversions array
    //Also remove them from leads
  }
  
  
}