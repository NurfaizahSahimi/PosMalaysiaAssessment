describe('Shipment Quote Calculation Test', () => {
  
  it('Verify user can calculate the shipment quote from Malaysia to India', () => {
    
    cy.viewport(1280, 800);
    // Step 1: User goes to the rate calculator page
    cy.visit('https://pos.com.my/send/ratecalculator');

    // by default, the value From is Malaysia. checking the value 
    cy.get('div.flex.flex-col.ml-1').contains('span.text-xs', 'Country').siblings('span.font-bold').should('have.text', 'Malaysia');  // Ensure the text is "Malaysia"

    cy.get('input[formcontrolname="postcodeFrom"]').scrollIntoView().focus().should('be.visible').type('35600');
    
    // ensure the postcode we key in will get Perak state
    cy.get('input[placeholder="State"]').should('have.value', 'Perak');

    // fill up the To value with India
    cy.get('input[name="country"]').scrollIntoView().focus().clear().type('India').click({ force: true });

    cy.get('mat-option').contains('India - IN').should('be.visible').click({ force: true });  // Click on the option

    // fill up the weight value
    cy.get('input[formcontrolname="itemWeight"]').scrollIntoView().focus().should('be.visible').type(1);

    // click on calculate button
    cy.get('a').contains('Calculate').scrollIntoView().click({force: true});

    // Verify user can see multiple quotes and shipments options available.
    // i am going to filter by Service Type available, each Service Type represents one record 

    const serviceTypes = [] // Initialize an empty array to store service types

    cy.get('div')
      .contains('Service Type') // Find the <dt> element containing the text "Service Type"
      .parents('div') // Move to the parent <div> that contains all service info
      .find('dt') // Find all <dt> elements to locate the "Service Type"
      .each(($dt) => {
        // Check if the <dt> text is "Service Type" and get the following <dd> element
        if ($dt.text().includes('Service Type')) {
          // Get the next <dd> which should contain the service type name
          cy.wrap($dt).next('dd') // Get the next <dd> after the "Service Type" <dt>
            .then(($serviceType) => {
              const serviceType = $serviceType.text().trim(); // Get the service type text
              serviceTypes.push(serviceType) // Add the service type to the array
            })
        }
      })
      .then(() => {
        // After the loop finishes, assert that there is more than one service type
        expect(serviceTypes.length).to.be.greaterThan(1) // Assert that there are more than one service types
      })
        
  });
});
