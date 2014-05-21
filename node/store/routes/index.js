var express = require('express');
var router = express.Router();

//GET home page. 
router.get('/', function(req, res) {
  res.render('index');
});

//search-- using runCommand--mongodb text search
router.get('/search/:value', function(req, res){
var term = req.params.value;
console.log(term);
var db = req.db;
var collection = db.get('details');
console.log(collection);
collection.runCommand("text", {search: query}, function(e, docs){
  res.render('result', {"result" : docs});
});
});

//search-- finding all terms by specifying attribute
router.get('/result/:value', function(req, res){
var term = req.params.value;
console.log(term);
var db = req.db;
var collection = db.get('details');
console.log(collection);
collection.find({color: term}, function(e, docs){
  res.render('result', {"result" : docs});
});
});
 
 // GET list of all categories of products For example, Electronics, Beauty, Home 
router.get('/main', function(req, res) {
var db = req.db;
var collection = db.get('maincollection');
collection.find({}, {}, function(e, docs){
res.render('mainlist',{"mainlist" : docs});
	});
});

//GET list of products of a particular category. For example, list of all electronic items- Refrigerator, Mobile etc
router.get('/list/:categoryname', function(req, res){
var cat = req.params.categoryname;
console.log(cat);
var db = req.db;
var collection = db.get('itemcollection');
collection.find({categoryname:cat}, function(e, docs){
res.render('list',{"list" : docs});
	});
});


//GET list of Brands of selected object of particular category. For example, list of Refrigerator brands
router.get('/details/:item', function(req, res){
var itemname = req.params.item;
console.log(itemname);
var db = req.db;
var collection = db.get('details');
collection.find({item:itemname}, function(e, docs){ 
res.render('details',{"details" : docs});
	});
});

//GET details of Brands of selected category. For example, Details about LG refrigerator
router.get('/tvlist/:name', function(req, res){
var brand = req.params.name;
console.log(brand);
var db = req.db;
var collection = db.get('details');
collection.find({name:brand}, function(e, docs){ 
res.render('tvlist',{"tvlist" : docs});
	});
});

module.exports = router;
