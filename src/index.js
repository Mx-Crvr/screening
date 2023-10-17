const express = require('express');
require('dotenv').config()
const app = express();
const PORT = process.env.PORT;
console.log(process.env.TOKEN)
const path = require('path');
var Airtable = require('airtable');
var base = new Airtable({apiKey: `${process.env.TOKEN}`}).base('apptL7CLejGyehMAI');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));

// DUDIT
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.post('/dudit', (req, res) => {
  base('AUDIT/DUDIT').create([
    {
      "fields": {
        "First name": req.body.firstName,
        "Last name": req.body.firstName,
        "Phone number": req.body.phoneNumber,
        "Email address": req.body.emailAddress,
        "DUDIT Score": req.body.hiddenDuditScore,
        "AUDIT Score": req.body.hiddenAuditScore,
      }
    },
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });

  res.sendFile(path.join(__dirname, '../dist/success.html'))
});


app.post('/audit', (req, res) => {
  base('Log').create([
    {
      "fields": {
        "First name": req.body.firstName,
        "Last name": req.body.lastName,
        "Phone number": req.body.phoneNumber,
        "Email address": req.body.emailAddress,
        "DUDIT Score": req.body.hiddenDuditScore,
        "AUDIT Score": req.body.hiddenAuditScore,
      }
    },
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
  res.sendFile(path.join(__dirname, '../dist/success.html'))
});

app.post('/combined', (req, res) => {
  base('Log').create([
    {
      "fields": {
        "First name": req.body.firstName,
        "Last name": req.body.lastName,
        "Phone number": req.body.phoneNumber,
        "Email address": req.body.emailAddress,
        "DUDIT Score": req.body.hiddenDuditScore,
        "AUDIT Score": req.body.hiddenAuditScore,
      }
    },
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    records.forEach(function (record) {
      console.log(record.getId());
    });
  });
  res.sendFile(path.join(__dirname, '../dist/success.html'))
})

app.listen((PORT), console.log('Sever listening on port:', PORT)) 