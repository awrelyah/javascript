/*  1. Lugeda tellimuse objekti seest kõik tellimuse esemed - printida iga eseme nimi, kogus,  hind ja summa (2tk*4€ = 8€)
konsooli eraldi reale.
2. Kõige lõpus printida konsooli tellimuse kogusumma koos käibemaksuga. */
var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 

tellimuseKogusumma = 0;
tellimuseKogusummaKm = 0;

// loop käib iga object array läbi (rows[index])
  for(let i = 0; i < tellimus.rows.length; i++) {
    //valued objectist
    nimi = tellimus.rows[i].name;
    kogus = tellimus.rows[i].amount;
    hindIlmaKm = tellimus.rows[i].price;
    kmProtsent = tellimus.rows[i].vat;
    //tehted
    kaibemaks =  hindIlmaKm * kmProtsent;
    hind = hindIlmaKm + kaibemaks;
    summaIlmaKm = hindIlmaKm * kogus;
    summa = hind * kogus;

    tellimuseKogusumma += summaIlmaKm;
    tellimuseKogusummaKm += summa;
    //print 
    console.log("Eseme nimi: " + nimi + '\n' + "Hind: " + hindIlmaKm + '\n' + "Kogus: " + kogus + '\n' + "Summa: " + summaIlmaKm);
  }

//kogu käibemaksu arvutus
kmKokku = tellimuseKogusummaKm - tellimuseKogusumma;
  //print kogusumma + km
console.log("Tellimuse kogusumma on " + tellimuseKogusummaKm + " eurot, millest käibemaks on " + kmKokku + " eurot.");