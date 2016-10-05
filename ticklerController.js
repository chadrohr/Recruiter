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
    var secretary = new Secretary();
    var leads = secretary.getLeads();
    var conversions = secretary.addConversion;
    var this.id = 345
    function renderLeads(arr) {
        //Get the leads from your secretary and for every lead
        //Render them to the screen
        var leadElem = $('#leads');
        var template = '';

        for (var i = 0; i < leads.length; i++) {
            var lead = leads[i]
            template +=
                `<div>
                
                <h4>${lead.name}</h4>
                <p>${lead.phone}</p>
                <p>${lead.email}</p>
                <input type="checkbox">Called
                <input type="checkbox">Emailed
                <input type="text" class="form-control" placeholder="mmddyyyy">Date of Interview
                <button class="btn-primary" id="${lead.id}">Add to Conversions
            </div>`
        }
        leadElem.empty();
        leadElem.append(template);

    }

    function renderConversions() {
        //Get the conversions from your secretary and for every conversion
        //Render them to the screen
        var conversionElem = $('conversions');
        var template = '';
        for (var i = 0; 1< conversions.length; i ++){
            var conversion = conversions[i];
            template +=
        `<div>
                <h4>${conversion.name}</h4>
                <p>${conversion.phone}</p>
                <p>${conversion.email}</p>
                <input type="checkbox">Called
                <input type="checkbox">Emailed
                <input type="text" class="form-control" placeholder="date of Interview">
                <input class="btn btn-default" type="submit" value="Make Lead">
                <button class="btn-danger" id="${conversion.id}">Add to Leads
            </div>`
    }
            conversionElem.empty();
            conversionElem.append(template);
    }



    renderLeads();
    renderConversions();

}



Recruiter()