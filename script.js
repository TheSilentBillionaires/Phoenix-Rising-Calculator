function calculateRevenue() {
  const influencers = Number(document.getElementById('influencers').value);
  const webinarsPerDay = Number(document.getElementById('webinarsPerDay').value);
  const daysPerMonth = Number(document.getElementById('daysPerMonth').value);
  const attendeesPerWebinar = Number(document.getElementById('attendeesPerWebinar').value);
  const conversionRate = Number(document.getElementById('conversionRate').value) / 100;
  const phase1Price = Number(document.getElementById('phase1Price').value);
  const phase2Price = Number(document.getElementById('phase2Price').value);
  const phase1Share = Number(document.getElementById('phase1Share').value) / 100;
  const phase2Share = Number(document.getElementById('phase2Share').value) / 100;

  const totalWebinars = influencers * webinarsPerDay * daysPerMonth;
  const totalAttendees = totalWebinars * attendeesPerWebinar;
  const totalClients = Math.floor(totalAttendees * conversionRate);

  const phase1Clients = Math.floor(totalClients * phase1Share);
  const phase2Clients = Math.floor(totalClients * phase2Share);

  const phase1Revenue = phase1Clients * phase1Price;
  const phase2Revenue = phase2Clients * phase2Price;
  const monthlyRevenue = phase1Revenue + phase2Revenue;
  const annualRevenue = monthlyRevenue * 12;

  const resultText =
    `Total Clients/Month: ${totalClients}\n` +
    `Phase 1 Clients: ${phase1Clients} | Revenue: $${phase1Revenue.toLocaleString()}\n` +
    `Phase 2 Clients: ${phase2Clients} | Revenue: $${phase2Revenue.toLocaleString()}\n\n` +
    `Monthly Revenue: $${monthlyRevenue.toLocaleString()}\n` +
    `Annual Revenue: $${annualRevenue.toLocaleString()}`;

  document.getElementById('output').innerText = resultText;

  // NEW: Save result into hidden form field
  const calcField = document.getElementById('calculationData');
  if (calcField) {
    calcField.value = resultText;
  }
}
