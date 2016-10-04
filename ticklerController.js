/**
 * Should get leads from the ticklerService
 * Render leads to the screen
 * add a checkbox for called
 * checkbox for email
 * input box for the date of the interview
 * checkbox signed up 
 * button Add to My Conversions
*/

function Recruiter() {
    var secretary = new Secretary()
    var leads = secretary.getLeads();
    console.log(leads)
    function renderLeads() {
        //Get the leads from your secretary and for every lead
        //Render them to the screen
        var leadElem = $('#leads')
        var template = ''
        for (var i = 0; i < leads.length; i++) {
            var lead = arr[i];
            template +=
                `<div>
                <h4>${lead.name}</h4>
                <p>${lead.phome}</p>
                <p>${lead.email}</p>
                <input type="checkbox">Called
                <input type="checkbox">Emailed
                <input type="text" class="form-control" placeholder="date of Interview">
                <input class="btn btn-default" type="submit" value="Make Conversion">
            </div>`
        }

        function renderConversions() {
            //Get the conversions from your secretary and for every conversion
            //Render them to the screen
            `<div>
                <h4>Name</h4>
                <p>Phone</p>
                <p>email</p>
                <input type="checkbox">Called
                <input type="checkbox">Emailed
                <input type="text" class="form-control" placeholder="date of Interview">
                <input class="btn btn-default" type="submit" value="Make Lead">
            </div>`
        }



        renderLeads();
        renderConversions();

    }
}


Recruiter()