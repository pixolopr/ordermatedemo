//VARIABLES NEEDED
//var adminurl = "http://admin.toy-kraft.com/rest/index.php/";

var statedata = [{"id":"1","zone":"1","name":"Delhi"},{"id":"2","zone":"1","name":"Haryana"},{"id":"3","zone":"1","name":"Himachal Pradesh"},{"id":"4","zone":"1","name":"Jammu and Kashmir"},{"id":"5","zone":"4","name":"Madhya Pradesh"},{"id":"6","zone":"1","name":"Punjab"},{"id":"7","zone":"1","name":"Uttarakhand"},{"id":"8","zone":"1","name":"Uttar Pradesh"},{"id":"9","zone":"1","name":"Chhattisgarh"},{"id":"10","zone":"2","name":"Andhra Pradesh"},{"id":"11","zone":"2","name":"Karnataka"},{"id":"12","zone":"2","name":"Kerala"},{"id":"13","zone":"2","name":"Pondicherry"},{"id":"14","zone":"2","name":"Tamil Nadu"},{"id":"15","zone":"3","name":"Assam"},{"id":"16","zone":"3","name":"Bihar"},{"id":"17","zone":"3","name":"Arunachal Pradesh"},{"id":"18","zone":"3","name":"Manipur"},{"id":"19","zone":"3","name":"Nagaland"},{"id":"20","zone":"3","name":"Orissa"},{"id":"21","zone":"3","name":"Sikkim"},{"id":"22","zone":"3","name":"Tripura"},{"id":"23","zone":"3","name":"West Bengal"},{"id":"24","zone":"3","name":"Jharkhand"},{"id":"25","zone":"4","name":"Goa"},{"id":"26","zone":"4","name":"Gujarat"},{"id":"27","zone":"4","name":"Maharashtra"},{"id":"28","zone":"1","name":"Rajasthan"}];
var citydata = [{"id":"1","state":"27","name":"Mumbai"},{"id":"2","state":"27","name":"Pune"},{"id":"3","state":"1","name":"New Delhi"},{"id":"4","state":"11","name":"Bangalore"},{"id":"5","state":"14","name":"Chennai"},{"id":"6","state":"10","name":"Hyderabad"},{"id":"7","state":"14","name":"Coimbatore"},{"id":"8","state":"11","name":"Mangalore"},{"id":"9","state":"27","name":"Nashik"},{"id":"10","state":"27","name":"Aurangabad"},{"id":"11","state":"26","name":"Surat"},{"id":"12","state":"26","name":"Ahmedabad"},{"id":"13","state":"26","name":"Rajkot"},{"id":"14","state":"26","name":"Baroda"},{"id":"15","state":"28","name":"Jaipur"},{"id":"16","state":"28","name":"Udaipur"},{"id":"17","state":"11","name":"Mysore"},{"id":"18","state":"10","name":"Vijaywada"},{"id":"19","state":"9","name":"Raipur"},{"id":"20","state":"27","name":"Nagpur"},{"id":"21","state":"27","name":"Jalgaon"},{"id":"22","state":"27","name":"Sholapur"},{"id":"23","state":"27","name":"Kolhapur"},{"id":"24","state":"5","name":"Indore"},{"id":"25","state":"5","name":"Jabalpur"},{"id":"26","state":"28","name":"Jodhpur"},{"id":"27","state":"8","name":"Noida"},{"id":"28","state":"8","name":"Ghaziabad"},{"id":"29","state":"8","name":"Meerut"},{"id":"30","state":"8","name":"Agra"},{"id":"31","state":"8","name":"Lucknow"},{"id":"32","state":"8","name":"Kanpur"},{"id":"34","state":"7","name":"Haldwani"},{"id":"35","state":"7","name":"Dehradun"},{"id":"36","state":"3","name":"Unna"},{"id":"37","state":"6","name":"Ludhiana"},{"id":"38","state":"6","name":"Jhalandhar"},{"id":"39","state":"6","name":"Chandigarh"},{"id":"40","state":"2","name":"Faridabad"},{"id":"41","state":"2","name":"Gurgaon"},{"id":"42","state":"2","name":"Ambala"},{"id":"43","state":"16","name":"Patna"},{"id":"44","state":"24","name":"Jhamshedpur"},{"id":"45","state":"24","name":"Ranchi"},{"id":"46","state":"23","name":"Kolkotta"},{"id":"47","state":"23","name":"Siliguri"},{"id":"48","state":"15","name":"Guwhati"},{"id":"49","state":"10","name":"Viskhapatnam"},{"id":"50","state":"23","name":"Darjeeling"},{"id":"51","state":"23","name":"Gangtok"},{"id":"52","state":"23","name":"Kalingpong"},{"id":"53","state":"23","name":"Namchi"},{"id":"54","state":"23","name":"Jai Gaon"},{"id":"55","state":"15","name":"Shilong"},{"id":"56","state":"19","name":"Dimapur"},{"id":"57","state":"16","name":"Muzzafarpur"},{"id":"58","state":"24","name":"Jamshedpur"},{"id":"59","state":"20","name":"Bhubaneshwar"},{"id":"60","state":"20","name":"Cuttack"},{"id":"61","state":"20","name":"Rourkela"},{"id":"62","state":"20","name":"Sambalpur"},{"id":"63","state":"10","name":"Secunderabad"},{"id":"64","state":"5","name":"Bhopal"},{"id":"65","state":"8","name":"Banaras"},{"id":"66","state":"8","name":"Allahabad"},{"id":"67","state":"7","name":"Mussoorie"},{"id":"68","state":"7","name":"Rourkee"},{"id":"69","state":"7","name":"Hrishikesh"},{"id":"70","state":"7","name":"Haridwar"},{"id":"71","state":"7","name":"Haldwani"},{"id":"72","state":"7","name":"Nainital"},{"id":"73","state":"7","name":"Ramnagar"},{"id":"74","state":"7","name":"Kashipur"},{"id":"75","state":"7","name":"Bajpur"},{"id":"76","state":"7","name":"Rudrapur"},{"id":"77","state":"6","name":"Khanna"},{"id":"78","state":"6","name":"Mandi Gowindgarh"},{"id":"79","state":"6","name":"Patiala"},{"id":"80","state":"6","name":"Bhatinda"},{"id":"81","state":"6","name":"Jalandhar"},{"id":"82","state":"6","name":"Amritsar"},{"id":"83","state":"6","name":"Pathankot"},{"id":"84","state":"3","name":"Mango City"},{"id":"85","state":"3","name":"Palampur"},{"id":"86","state":"3","name":"Dharamshala"},{"id":"87","state":"3","name":"Mandi"},{"id":"88","state":"3","name":"Manali"},{"id":"89","state":"3","name":"Shimla"},{"id":"90","state":"8","name":"Moradabad"},{"id":"91","state":"8","name":"Sarangpur"},{"id":"92","state":"26","name":"Gandhinagar"},{"id":"93","state":"26","name":"Himantnagar"},{"id":"94","state":"25","name":"Goa"},{"id":"95","state":"27","name":"Ratnagiri"},{"id":"130","state":"7","name":"Nainital"},{"id":"135","state":"2","name":"Panipat"},{"id":"136","state":"26","name":"Porbandar"}];
var areadata = [{"id":"12","city":"2","name":"M.G. ROAD (CAMP)","distributor":"36"},{"id":"13","city":"2","name":"KALYANI NAGAR","distributor":"36"},{"id":"14","city":"2","name":"VIMAN NAGAR \/ KHARADI","distributor":"36"},{"id":"15","city":"2","name":"VISHRANTWADI \/ KHADKI","distributor":"36"},{"id":"16","city":"2","name":"BANER \/ PASHAN","distributor":"36"},{"id":"17","city":"2","name":"AUNDH","distributor":"36"},{"id":"18","city":"2","name":"DECCAN GYMKHANA","distributor":"36"},{"id":"19","city":"2","name":"CITY","distributor":"36"},{"id":"20","city":"2","name":"KOTHRUD","distributor":"36"},{"id":"21","city":"2","name":"PAUD ROAD","distributor":"36"},{"id":"22","city":"2","name":"BIBVEWADI","distributor":"36"},{"id":"23","city":"2","name":"SINGHAD ROAD","distributor":"36"},{"id":"24","city":"2","name":"WANAWADI","distributor":"36"},{"id":"25","city":"2","name":"KONDHWA","distributor":"36"},{"id":"26","city":"2","name":"PIMPRI \/ CHINCHWAD \/ WAKAD","distributor":"36"},{"id":"28","city":"1","name":"BANDRA WEST","distributor":"47"},{"id":"29","city":"1","name":"BANDRA EAST","distributor":"47"},{"id":"30","city":"1","name":"BREACH CANDY","distributor":"46"},{"id":"31","city":"1","name":"DADAR EAST","distributor":"48"},{"id":"32","city":"1","name":"DADAR WEST","distributor":"48"},{"id":"33","city":"1","name":"KANDIVALI WEST","distributor":"1"},{"id":"34","city":"119","name":"Vashi","distributor":"61"},{"id":"35","city":"1","name":"SOUTH MUMBAI","distributor":"46"},{"id":"36","city":"1","name":"VILE PARLE EAST","distributor":"47"},{"id":"37","city":"1","name":"Borivali - East & West","distributor":"47"},{"id":"38","city":"1","name":"Kandivali- EAST","distributor":"47"},{"id":"39","city":"1","name":"Kandivali- West","distributor":"1"},{"id":"40","city":"1","name":"Malad -East & WEST","distributor":"47"},{"id":"41","city":"1","name":"Goregaon -East & West","distributor":"1"},{"id":"42","city":"1","name":"Andheri East","distributor":"47"},{"id":"43","city":"1","name":"Andheri West","distributor":"47"},{"id":"44","city":"1","name":"Powai","distributor":"1"},{"id":"45","city":"1","name":"Vileparle - East & West","distributor":"47"},{"id":"46","city":"1","name":"Santacruz- East West","distributor":"47"},{"id":"47","city":"1","name":"Khar- Bandra -East West","distributor":"47"},{"id":"48","city":"48","name":"Guwhati - City","distributor":"20"},{"id":"49","city":"46","name":"Alipur \/ New Alipur\/ Bihala\/ Splanet\/ Bada Bazaar","distributor":"28"},{"id":"50","city":"3","name":"Dwarka \/ Janakpuri\/ Vikaspuri\/ Jwalahedi\/ Punjabi Baug\/ Paschim Vihar \/ Tilak Nagar","distributor":"1"},{"id":"51","city":"12","name":"Naranpura","distributor":"49"},{"id":"52","city":"4","name":"Jai Nagar\/ J P Nagar\/ Basangudi","distributor":"31"},{"id":"54","city":"6","name":"Dilsukhnagar \/ Chetainyapuri \/ Champapet \/ Shivam Road\/ Immayatnagar","distributor":"32"},{"id":"55","city":"4","name":"Nagwara \/ Huqbal","distributor":"31"},{"id":"56","city":"4","name":"HBR Layout \/ Frazer Town","distributor":"31"},{"id":"57","city":"4","name":"HSR Layout \/  Sarjapur","distributor":"31"},{"id":"58","city":"4","name":"Indranagar \/ Thippsandra \/ Commercial St.","distributor":"31"},{"id":"59","city":"46","name":"South City\/ Godiya\/ Jadhavpur\/ Goriyahat\/ Dhakuriya","distributor":"28"},{"id":"60","city":"46","name":"Desopiyo Park\/ Elgin Road\/ Bhavanipur\/ Exit\/ Maidan","distributor":"28"},{"id":"61","city":"46","name":"South Lake\/ Sector 5\/ Technolpolis\/ Karunamoi\/ Rajahut","distributor":"28"},{"id":"62","city":"46","name":"Shyam Bazaar\/ Podiya Pukur\/ Kakurgachi\/ Lake Town\/ Baguwadi","distributor":"28"},{"id":"63","city":"46","name":"Howrah\/ Chandannagar\/ Chirchura\/ Kacharapada","distributor":"28"},{"id":"64","city":"47","name":"Siliguri City","distributor":"21"},{"id":"65","city":"50","name":"Darjeeling - City","distributor":"21"},{"id":"66","city":"51","name":"Gangtok - City","distributor":"21"},{"id":"67","city":"52","name":"Kalingpong - City","distributor":"21"},{"id":"68","city":"53","name":"Namchi - City","distributor":"21"},{"id":"69","city":"54","name":"Jai Gaon - City","distributor":"21"},{"id":"70","city":"55","name":"Shillong - City","distributor":"60"},{"id":"71","city":"56","name":"Dimapur - City","distributor":"60"},{"id":"72","city":"55","name":"Shilong City","distributor":"60"},{"id":"73","city":"3","name":"Rajouri Garden\/ Ramesh Nagar\/ Kirti Nagar\/ Narayana\/ Inderpuri","distributor":"1"},{"id":"74","city":"3","name":"Karol Baug\/ Shankar Road\/ Patel Nagar\/ Jandewala","distributor":"1"},{"id":"75","city":"3","name":"Kamala Nagar\/ Mddel Town\/ Ashok Vihar\/ Aadarsh Nagar\/ Civil-lines\/ Mukherjee Nagar","distributor":"4"},{"id":"76","city":"3","name":"Shalimar Baug\/ Pitampura\/ Rani Baug\/ Saraswati Vihar\/ Pushpanjali","distributor":"4"},{"id":"77","city":"3","name":"Rohini\/ Prashant vihar","distributor":"4"},{"id":"78","city":"3","name":"Amar Colony\/ G K - 1\/ G K - 2\/ Kalkaji\/ Govindpuri\/ Alaknanda","distributor":"6"},{"id":"79","city":"3","name":"Lajpat Nagar\/ Vasant Vihar\/ New Friends Colony\/ Khan Market\/ Defense colony\/ Mulchand","distributor":"6"},{"id":"80","city":"3","name":"Sarojini Nagar\/ Safdarjung \/ Green Park\/ Saket\/ Haus Khaus\/ Malvi Nagar","distributor":"6"},{"id":"81","city":"3","name":"Basant Kunj\/ Moti Baug \/ R K Puram\/ Muneerka","distributor":"6"},{"id":"82","city":"41","name":"Gurgaon - 1","distributor":"5"},{"id":"83","city":"41","name":"Gurgaon - 2","distributor":"5"},{"id":"84","city":"56","name":"Dimapur - City","distributor":"20"},{"id":"85","city":"43","name":"Patna City","distributor":"66"},{"id":"86","city":"57","name":"Muzzafarpur City","distributor":"25"},{"id":"87","city":"45","name":"Ranchi - City","distributor":"22"},{"id":"88","city":"44","name":"Jhamshedpur - City","distributor":"59"},{"id":"89","city":"59","name":"Bhubaneshwar - City","distributor":"27"},{"id":"90","city":"60","name":"Cuttack - City","distributor":"27"},{"id":"91","city":"61","name":"Rourkela - City","distributor":"27"},{"id":"92","city":"62","name":"Sambalpur - City","distributor":"27"},{"id":"93","city":"6","name":"ECIL \/ Tarnaka \/ A S Raonagar \/ Karkhana","distributor":"32"},{"id":"94","city":"6","name":"Abits \/ Nampalli \/ Vijaynagar Colony \/ Medhipatnam \/ Athapur","distributor":"32"},{"id":"95","city":"6","name":"Begumpet \/ Pujagutta \/Banjara Hills \/Jubilee Hills","distributor":"32"},{"id":"96","city":"6","name":"Amirpet \/ S R Nagar \/ Ysugoda \/ Kukatpalli","distributor":"32"},{"id":"97","city":"6","name":"K P H B Colony\/ V V Nagar \/ Nizampet\/ Madinaguda\/ Miyapur","distributor":"32"},{"id":"99","city":"6","name":"HiTech City \/ Gacchgolli \/ Kondapur","distributor":"32"},{"id":"100","city":"63","name":"General Bazaar\/ Station","distributor":"32"},{"id":"101","city":"63","name":"Maradpalli \/ M G Road \/ S D Road\/ Narangwada \/ Musheerabad","distributor":"32"},{"id":"102","city":"12","name":"CG Road\/ Ashram Rd.","distributor":"49"},{"id":"103","city":"12","name":"Satellite\/ Jodpur","distributor":"49"},{"id":"104","city":"12","name":"Vastrapur\/ S G Highway","distributor":"49"},{"id":"105","city":"12","name":"Chandkheda \/ Shahibaug","distributor":"49"},{"id":"106","city":"12","name":"Bopal \/ Sun City","distributor":"49"},{"id":"107","city":"12","name":"Paldi \/ Pankor Naka\/ Maninagar","distributor":"49"},{"id":"108","city":"24","name":"Indore - City","distributor":"52"},{"id":"109","city":"64","name":"Bhopal - City","distributor":"52"},{"id":"110","city":"5","name":"ADYAR\/ THIRUVANMYUR\/ BESANT NAGER\/ KOTTIVAKKAM\/ OMR\/ VELACHERY","distributor":"29"},{"id":"111","city":"5","name":"ADAMBAKKAM \/ MADIPAKKAM\/ GOWRIVAKKAM\/ PORUR\/ PALLAVARAM\/ TAMBARAM\/ PERAMBAKKAM\/ MADAVAKKAM","distributor":"29"},{"id":"112","city":"5","name":"ANNANAGAR \/ SALIGRAMAM\/ MUGAPPAIR\/ VANAGARAM\/ VADAPALANI\/ K K NAGER\/ T NAGAR \/ WEST MAMBALAM","distributor":"29"},{"id":"113","city":"5","name":"NUNGAMBAKKAM \/ EGMORE\/ MOUNT ROAD\/ GOPALAPURAM\/ MYLAPOOR","distributor":"29"},{"id":"114","city":"5","name":"PURASIWALKAAM\/ KILPAUK\/ KELLYS\/ DOVETON\/ PERAMBUR\/ PARYS CORNER\/ VILLIVAKKAM \/KULUTHUR","distributor":"29"},{"id":"115","city":"4","name":"Kaggadaspura\/ Marathalli\/ Whitefield\/ Varthur","distributor":"31"},{"id":"116","city":"4","name":"Kammanahalli\/ Banaswadi\/ Hennur\/ Ram Murthy Hagar","distributor":"31"},{"id":"117","city":"4","name":"Sahakarnaga\/ Thindlu\/ Vidyaranyapura\/ Amruthahalli\/ R.T.Nagar","distributor":"31"},{"id":"118","city":"4","name":"Malleshwaram\/ Mathikeri\/ Bel Road\/ Sanjaynagar","distributor":"31"},{"id":"119","city":"4","name":"Vijayanagar\/ Chandra Layout\/ Basaveshwarnagar\/ Nagarbhavi\/","distributor":"31"},{"id":"120","city":"27","name":"Noida - 38A, 18, 27","distributor":"2"},{"id":"121","city":"27","name":"NOIDA - 62, 50, 41, 81, 90","distributor":"2"},{"id":"122","city":"27","name":"Greater Noida","distributor":"2"},{"id":"123","city":"30","name":"Agra \/ Aligarh","distributor":"18"},{"id":"124","city":"30","name":"Aligarh \/ Mathura","distributor":"18"},{"id":"125","city":"32","name":"Kanpur - City","distributor":"58"},{"id":"126","city":"31","name":"Gomti Nagar \/ Bhutnath \/ Mahanagar","distributor":"13"},{"id":"127","city":"31","name":"Hazarthganj \/ Chowk \/ Naka \/ Lalbaug","distributor":"13"},{"id":"128","city":"65","name":"Banaras - City","distributor":"17"},{"id":"129","city":"66","name":"Allahabad - City","distributor":"17"},{"id":"130","city":"35","name":"Dehradhun - City","distributor":"16"},{"id":"131","city":"90","name":"Moradabad - City","distributor":"9"},{"id":"132","city":"91","name":"Sarangpur - City","distributor":"9"},{"id":"133","city":"29","name":"Meerut - City","distributor":"9"},{"id":"134","city":"37","name":"Ludhiana - City","distributor":"10"},{"id":"135","city":"77","name":"Khanna - City","distributor":"10"},{"id":"136","city":"38","name":"Jhalandhar - City","distributor":"19"}];
var retailerdata = [{"id":"2","lat":"0","long":"0","area":"28","dob":"1989-06-01","type_of_area":"0","sq_feet":"500","store_image":"","name":"success","number":"27526660","email":"meetrajput1234@gmail.com","address":"NRI COMPLEX, SHOP NO.8, SEAWOOD ESTATE, SECTOR 58 NERUL NAVI MUMBAI","ownername":"Jaimal","ownernumber":"89765","contactname":"Bharat","contactnumber":"9167436068","timestamp":"2014-11-03 16:10:58"},{"id":"7","lat":"0","long":"0","area":"37","dob":"0000-00-00","type_of_area":"0","sq_feet":"12000","store_image":"image17.jpg","name":"Anupam Stationery superstore pvt. ltd. (moksh)","number":"02228998880","email":"info@anupam.net.in","address":"31, moksh plaza, S.V. road, near railway station, borivali (w), Mumbai.","ownername":"Ramnik gala","ownernumber":"","contactname":"Mr. Bhavar","contactnumber":"9167212081","timestamp":"2014-11-21 05:34:41"},{"id":"8","lat":"0","long":"0","area":"37","dob":"1984-07-14","type_of_area":"0","sq_feet":"0","store_image":"","name":"Little wonder toys & sports .","number":"02228999945","email":"littliwonder.3102@gmail.com","address":"Shraddha shopping center, s.V. road, opp. Indraprastha, borivali (w), mumbai","ownername":"Mr. Jigar","ownernumber":"9867222378","contactname":"Mr.Rajesh","contactnumber":"9320540766","timestamp":"2014-11-21 05:34:41"},{"id":"9","lat":"0","long":"0","area":"37","dob":"0000-00-00","type_of_area":"0","sq_feet":"1000","store_image":"image19.jpg","name":"Anupam stationery superstore pvt.ltd.","number":"02228330303","email":"info@anupam.net.in","address":"Sai shopping mall, opp. Railway station, borivali (w), Mumbai.","ownername":"Ramnikbhai gala","ownernumber":"9820059190","contactname":"Mr. Sampat","contactnumber":"9769774492","timestamp":"2014-11-21 05:34:41"},{"id":"10","lat":"0","long":"0","area":"28","dob":"0000-00-00","type_of_area":"0","sq_feet":"1000","store_image":"","name":"Odyssey","number":"24402264","email":"selvaraj.david@gmail.com","address":"Odyssey Towers no 45&47,first main road, Gandhi Hager,Adayar,Chennai","ownername":"","ownernumber":"","contactname":"","contactnumber":"","timestamp":"2014-11-29 12:18:40"},{"id":"11","lat":"0","long":"0","area":"37","dob":"0000-00-00","type_of_area":"0","sq_feet":"400","store_image":"","name":"Gora Gandhi sports & toys.","number":"02228938439","email":"devisinghpurohit09@gmail.com","address":"Shop no. 17, Goragandhi apartment, s.v.p. Road, borivali (w), Mumbai.","ownername":"Devi singh purohit","ownernumber":"9869113689","contactname":"Mr. Gulabbhai","contactnumber":"9619698012","timestamp":"2014-11-21 05:34:41"},{"id":"12","lat":"0","long":"0","area":"78","dob":"2014-09-29","type_of_area":"0","sq_feet":"125","store_image":"","name":"kidsland","number":"","email":"","address":"K block Kalkaji","ownername":"","ownernumber":"","contactname":"","contactnumber":"","timestamp":"2014-11-21 05:34:41"},{"id":"14","lat":"0","long":"0","area":"37","dob":"1977-12-13","type_of_area":"0","sq_feet":"350","store_image":"","name":"Parshavi collection","number":"02228992332","email":"dreambalcan@gmail.com","address":"8, Mayekar shopping center, opp. Diamond talkies, l.T . road, borivali(w), Mumbai.","ownername":"Mr. Jigarbhai","ownernumber":"","contactname":"Mr. Jigarbhai.","contactnumber":"9820134001","timestamp":"2014-11-21 05:34:41"},{"id":"25","lat":"0","long":"0","area":"110","dob":"0000-00-00","type_of_area":"0","sq_feet":"500","store_image":"","name":"words & worths books p ltd","number":"24468659","email":"wordsnworths@gmail.com","address":"E 28 second avenue Besantnager","ownername":"Ansari","ownernumber":"9710036383","contactname":"sadham","contactnumber":"9710036383","timestamp":"2014-11-21 05:34:41"},{"id":"26","lat":"0","long":"0","area":"31","dob":"1964-10-25","type_of_area":"0","sq_feet":"450","store_image":"","name":"Asian General Store","number":"24184790","email":"asian_store@ymail.com","address":"807,Imperial Mahal,khodadad circle,Dr. Ambedkar Road,radar t t,mumbai","ownername":"kishor","ownernumber":"9820615970","contactname":"ankit","contactnumber":"9967618101","timestamp":"2014-11-21 05:34:41"},{"id":"28","lat":"0","long":"0","area":"116","dob":"1985-10-02","type_of_area":"0","sq_feet":"2200","store_image":"image32.jpg","name":"toy junction","number":"25459599","email":"toyjunction@gmail.com","address":"406\/4m,1st floor, s.r.v.plaza,Kammanahalli main road, kalyananagar, bangalore","ownername":"madhusudhan","ownernumber":"9379155599","contactname":"madhu","contactnumber":"9379955599","timestamp":"2014-11-21 05:34:41"},{"id":"30","lat":"0","long":"0","area":"78","dob":"0000-00-00","type_of_area":"0","sq_feet":"150","store_image":"image34.jpg","name":"kiddy land pvt.ltd","number":"26212956","email":"","address":"C\/20-21Amarcolony lajpat ngr new delhi","ownername":"mrs. sandhya","ownernumber":"9810766566","contactname":"mr. Ram","contactnumber":"9810866566","timestamp":"2014-11-21 05:34:41"},{"id":"31","lat":"0","long":"0","area":"116","dob":"1978-09-30","type_of_area":"0","sq_feet":"2150","store_image":"","name":"shobas gift gallery","number":"25427889","email":"","address":"60\/1 cmrc road hrbr layout Kalgan Hagar","ownername":"ashraf","ownernumber":"9448088453","contactname":"sayeed","contactnumber":"9448088453","timestamp":"2014-11-21 05:34:41"},{"id":"32","lat":"0","long":"0","area":"78","dob":"0000-00-00","type_of_area":"0","sq_feet":"150","store_image":"","name":"Baby walker","number":"41004282","email":"babywalkers1975@gmai.com","address":"23- M-block g k-1 new delhi","ownername":"Mr.Dipanshu gupta","ownernumber":"9999990347","contactname":"ranjit nagar","contactnumber":"8750128289","timestamp":"2014-11-21 05:34:41"},{"id":"33","lat":"0","long":"0","area":"116","dob":"0000-00-00","type_of_area":"0","sq_feet":"3000","store_image":"","name":"Little Finger","number":"40968540","email":"","address":"3&4 maruthi complex, 46\/1, papamma reddy layout, ram murthy Hagar, bangalore","ownername":"pankaj agarwal","ownernumber":"9900205255","contactname":"debananda","contactnumber":"8553789688","timestamp":"2014-11-21 05:34:41"},{"id":"34","lat":"0","long":"0","area":"110","dob":"1985-07-21","type_of_area":"0","sq_feet":"0","store_image":"","name":"empire fancy","number":"24464368","email":"bikalkma@gmail.com","address":"E34, 2nd avenue,Besant nagar","ownername":"haniff","ownernumber":"9884479170","contactname":"ashim","contactnumber":"9884479170","timestamp":"2014-11-21 05:34:41"},{"id":"35","lat":"0","long":"0","area":"110","dob":"2014-09-30","type_of_area":"0","sq_feet":"600","store_image":"","name":"pm enterprises","number":"04424466303","email":"lilmischiefchennai@gmail.com","address":"E-971stfloor3rd Main Road Besant Nagar","ownername":"Mukta","ownernumber":"9677115550","contactname":"Shyamala","contactnumber":"9994666098","timestamp":"2014-11-21 05:34:41"},{"id":"36","lat":"0","long":"0","area":"32","dob":"0000-00-00","type_of_area":"0","sq_feet":"600","store_image":"image40.jpg","name":"Prabhat Gift Centre","number":"24467047","email":"prabhatnexgen@gmail.com","address":"242,santosh,L.J.Road,Near shivaji park bus stop, radar(w).Mumbai","ownername":"zubin shah","ownernumber":"9820500997","contactname":"zubin","contactnumber":"9820500997","timestamp":"2014-11-21 05:34:41"},{"id":"37","lat":"0","long":"0","area":"116","dob":"1978-11-11","type_of_area":"0","sq_feet":"500","store_image":"","name":"The Olive","number":"41553324","email":"info@olive.co.in","address":"8, lp complex, 4th cross, ombr layout, banaswadi, Bangalore.","ownername":"paul","ownernumber":"9986952597","contactname":"john","contactnumber":"9886995122","timestamp":"2014-11-21 05:34:41"},{"id":"38","lat":"0","long":"0","area":"79","dob":"0000-00-00","type_of_area":"0","sq_feet":"60","store_image":"image39.jpg","name":"Rama book dipo","number":"29834324","email":"","address":"61, central MKT lajpat ngr new delhi","ownername":"","ownernumber":"","contactname":"","contactnumber":"","timestamp":"2014-11-21 05:34:41"},{"id":"39","lat":"0","long":"0","area":"79","dob":"0000-00-00","type_of_area":"0","sq_feet":"100","store_image":"image42.jpg","name":"khanna gift house","number":"29839852","email":"","address":"79,central MKT lajpat ngr new delhi","ownername":"Mr.Ashok khanna","ownernumber":"9871435332","contactname":"Mr. Dube","contactnumber":"9871976640","timestamp":"2014-11-21 05:34:41"},{"id":"40","lat":"0","long":"0","area":"79","dob":"1967-02-16","type_of_area":"0","sq_feet":"0","store_image":"image43.jpg","name":"Shiva toys","number":"29831541","email":"kohlisanjay16@gmail.com","address":"J-2A ground for central MKT lajpat ngr-2 new delhi","ownername":"Mr.Sanjay kohli","ownernumber":"9810830061","contactname":"Mr.ganesh","contactnumber":"9958347804","timestamp":"2014-11-21 05:34:41"},{"id":"41","lat":"0","long":"0","area":"110","dob":"0000-00-00","type_of_area":"0","sq_feet":"1000","store_image":"image44.jpg","name":"Dora bag mall","number":"26205302","email":"jangchennai@yahoo.co.in","address":"159A, 7th Avenue,Be sent Hager,Chennai","ownername":"Dora mall","ownernumber":"","contactname":"","contactnumber":"","timestamp":"2014-11-21 05:34:41"},{"id":"42","lat":"0","long":"0","area":"32","dob":"1964-11-27","type_of_area":"0","sq_feet":"215","store_image":"","name":"Good Luck Gift Gallery","number":"24451913","email":"padamshigala39@gmail.com","address":"Rehmat manjil, 59, l j road, mahim, mumbai","ownername":"piyush Gala","ownernumber":"9819656587","contactname":"sunil","contactnumber":"9820902433","timestamp":"2014-11-21 05:34:41"},{"id":"43","lat":"0","long":"0","area":"79","dob":"0000-00-00","type_of_area":"0","sq_feet":"150","store_image":"","name":"Sitaram Enterprise","number":"29842832","email":"sitaramenterprises09@yahoo.com","address":"J-5central MKT lajpat ngr new delhi","ownername":"Mr.Karan Arora","ownernumber":"9650338339","contactname":"ranjit","contactnumber":"8750128289","timestamp":"2014-11-21 05:34:41"}];
var productdata =[{"id":1,"name":"iPhone5","product":"iPhone5","encode":"ip5","name2":"iPhone5","productcode":"iPhone5","category":1,"image":["i51.jpg","i52.jpg","i53.jpg"],"mrp":50000,"description":"A smart phone by Apple","age":"18+","scheme":0,"isnew":0,"timestamp":15},
{"id":2,"name":"iPhone6","product":"iPhone6","encode":"ip6","name2":"iPhone6","productcode":"iPhone6","category":1,"image":["i5c1.jpg","i5c2.jpg","i5c3.jpg"],"mrp":60000,"description":"A smart phone by Apple","age":"18+","scheme":0,"isnew":1,"timestamp":15},
{"id":3,"name":"iPhone5c","product":"iPhone5c","encode":"ip5c","name2":"iPhone5c","productcode":"iPhone5c","category":1,"image":["i61.jpg","i62.jpg","i63.jpg"],"mrp":20000,"description":"A smart phone by Apple","age":"18+","scheme":4,"isnew":0,"timestamp":15},
{"id":4,"name":"Note 4","product":"Note 4","encode":"sn4","name2":"Note 4","productcode":"Note 4","category":2,"image":["snote41.jpg","snote42.jpg","snote43.jpg"],"mrp":30000,"description":"A smart phone by Samsung","age":"18+","scheme":0,"isnew":1,"timestamp":15},
{"id":5,"name":"Grand","product":"Grand","encode":"sgrand","name2":"Grand","productcode":"Grand","category":2,"image":["sgrand1.jpg","sgrand2.jpg","sgrand3.jpg"],"mrp":15000,"description":"A smart phone by Samsung","age":"18+","scheme":4,"isnew":0,"timestamp":15},
{"id":6,"name":"Nexus 4","product":"Nexus 4","encode":"n4","name2":"Nexus 4","productcode":"Nexus 4","category":3,"image":["n41.jpg","n42.jpg","n43.jpg"],"mrp":12000,"description":"A smart phone by Google","age":"18+","scheme":0,"isnew":0,"timestamp":15},
{"id":7,"name":"Nexus 5","product":"Nexus 5","encode":"n5","name2":"Nexus 5","productcode":"Nexus 5","category":3,"image":["n51.jpg","n52.jpg","n53.jpg"],"mrp":18000,"description":"A smart phone by Google","age":"18+","scheme":0,"isnew":0,"timestamp":15},
{"id":8,"name":"Nexus 6","product":"Nexus 6","encode":"n6","name2":"Nexus 6","productcode":"Nexus 6","category":3,"image":["n61.jpg","n62.jpg","n63.jpg"],"mrp":24000,"description":"A smart phone by Google","age":"18+","scheme":0,"isnew":1,"timestamp":15}];


//CREATE THE DATABASE
var db = openDatabase('ordermatedb', '1.0', 'ordermate DB', 50 * 1024 * 1024);

//CREATE ALL TABLES
db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USER (id Integer PRIMARY KEY, username, password)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS STATE (id Integer PRIMARY KEY, zone, name)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS CITY (id Integer PRIMARY KEY, state, name)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS AREA (id Integer PRIMARY KEY, city, name)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS RETAILER (id INTEGER ,lat,long,area,dob,type_of_area,sq_feet,store_image,name,number,email,address,ownername,ownernumber,contactname,contactnumber,timestamp, sync)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS PRODUCT (id INTEGER PRIMARY KEY, name, product, encode, name2, productcode, category,image,mrp,description VARCHAR2(5000),age,scheme,isnew,timestamp)');
    
    tx.executeSql('CREATE TABLE IF NOT EXISTS ORDERS (orderid INTEGER, userid INTEGER, retailerid INTEGER, id INTEGER,productcode, name, quantity INTEGER, mrp, totalprice, category, remark VARCHAR2(5000), timestamp)');
    
    
});

db.transaction(function (tx) {
    /*
    tx.executeSql("DROP TABLE STATE");
    tx.executeSql("DROP TABLE CITY");
    tx.executeSql("DROP TABLE AREA");
    tx.executeSql("DROP TABLE RETAILER");
    tx.executeSql("DROP TABLE PRODUCT");
    tx.executeSql("DROP TABLE ORDERS");
    */
    
                        //Insert User
                        tx.executeSql('INSERT INTO USER (id, username, password) VALUES ("2", "tushar", "tushar123")', [], function(tx,results){}, function(tx, results){});
                        //Get count of zone data
                        tx.executeSql("SELECT COUNT(*) AS count FROM RETAILER", [], function (tx, results) {
                            console.log(results.rows.item(0).count);
                        if(results.rows.item(0).count < 1 ){        
                          
                        
                            
                        //Insert State Data
                        for (var i = 0; i < statedata.length; i++) {
                        var sqls = 'INSERT INTO STATE (id , zone, name) VALUES (' + statedata[i].id + ',"' + statedata[i].zone + '","' + statedata[i].name + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                        }, null);
                    };
                        
                        //Insert City Data 
                        for (var i = 0; i < citydata.length; i++) {
                        var sqls = 'INSERT INTO CITY (id , state, name) VALUES (' + citydata[i].id + ',"' + citydata[i].state + '","' + citydata[i].name + '")';
                        tx.executeSql(sqls, [], function (tx, results) {
                        }, null);
                    }; 
                            
                        //Insert Area Data
                        for (var i = 0; i < areadata.length; i++) {
                        var sqls = 'INSERT INTO AREA (id , city, name) VALUES (' + areadata[i].id + ',"' + areadata[i].city + '","' + areadata[i].name + '")';
                        tx.executeSql(sqls, [], function (tx, results) {
                        }, null);
                    };
                           
                        //Insert Retailer Data 
                        for (var i = 0; i < retailerdata.length; i++) {
                        var sqls = 'INSERT INTO RETAILER (id,lat,long,area,dob,type_of_area,sq_feet,store_image,name,number,email,address,ownername,ownernumber,contactname,contactnumber,timestamp, sync) VALUES ("' + retailerdata[i].id + '","' + retailerdata[i].lat + '","' + retailerdata[i].long + '","' + retailerdata[i].area + '","' + retailerdata[i].dob + '","' + retailerdata[i].type_of_area + '","' + retailerdata[i].sq_feet + '","' + retailerdata[i].store_image + '","' + retailerdata[i].name + '","' + retailerdata[i].number + '","' + retailerdata[i].email + '","' + retailerdata[i].address + '","' + retailerdata[i].ownername + '","' + retailerdata[i].ownernumber + '","' + retailerdata[i].contactname + '","' + retailerdata[i].contactnumber + '","' + retailerdata[i].timestamp + '", "true")';
                        tx.executeSql(sqls, [], function (tx, results) {
                        }, function (tx, results) {
                        });
                    };
                        //Insert Product Data 
                        for (var i = 0; i < productdata.length; i++) {
                        var sqls = 'INSERT INTO PRODUCT (id, name, product, encode, name2, productcode, category,image,mrp,description,age,scheme,isnew,timestamp) VALUES (' + productdata[i].id + ',"' + productdata[i].name + '","' + productdata[i].product + '","' + productdata[i].encode + '","' + productdata[i].name2 + '","' + productdata[i].productcode + '","' + productdata[i].category + '","' + productdata[i].image + '","' + productdata[i].mrp + '","' + productdata[i].description + '","' + productdata[i].age + '","' + productdata[i].scheme + '","' + productdata[i].isnew + '","' + productdata[i].timestamp + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("PRODUCT RAOW INSERTED");
                        }, function (tx, results) {
                            console.log("PRODUCT RAOW NOT INSERTED");
                        });
                    };
                };
            }, function (tx, results) {
                        console.log(results);
                        }); 
            
        });

var mydatabase = angular.module('mydatabase', [])
    .factory('MyDatabase', function ($http, $location, $cordovaNetwork, MyServices, $cordovaToast) {

        var statedata = [];
        var checkstatedata = [];
        var checkcitydata = [];
        var checkareadata = [];
        var checkretailerdata = [];
        var categorydata = [];
        if ($.jStorage.get("categoriesdata")) {
            var categorydata = $.jStorage.get("categoriesdata");
        };
        var orderid = 0;
        if ($.jStorage.get("offlineorderid")) {
            orderid = $.jStorage.get("offlineorderid");
        };


        return {

            findzonebyuser: function () {
                return $http.get(adminurl + "zone/find", {
                    params: {
                        user: user
                    }
                });
            },
            addzonedata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO ZONE (id , name, email) VALUES (' + data[i].id + ',"' + data[i].name + '","' + data[i].email + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW INSERTED");
                        }, null);
                    };
                    console.log("zones added");
                });
            },
            findzonebyuseroffline: function () {
                zone = user.zone;
            },
            syncinretailerstatedata: function () {
                return $http.get(adminurl + "state/find", {
                    params: {}
                })
                console.log(statedata);
            },
            insertretailerstatedata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO STATE (id , zone, name) VALUES (' + data[i].id + ',"' + data[i].zone + '","' + data[i].name + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW INSERTED");
                        }, null);
                    };
                    $cordovaToast.show('States Data Imported', 'long', 'bottom');
                });
            },
            syncinretailercitydata: function () {
                return $http.get(adminurl + "city/find", {
                    params: {}
                })
            },
            insertretailercitydata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO CITY (id , state, name) VALUES (' + data[i].id + ',"' + data[i].state + '","' + data[i].name + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW INSERTED");
                        }, null);
                    };
                    $cordovaToast.show('City Data Imported', 'long', 'bottom');
                });
            },
            updatecitydata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'UPDATE CITY SET id = ' + data[i].id + ', state = "' + data[i].state + '", name = "' + data[i].name + '" WHERE id = ' + data[i].id;
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW UPDATED");
                        }, null);
                    };
                });
            },
            syncinretailerareadata: function () {
                return $http.get(adminurl + "area/find", {
                    params: {}
                })
            },
            insertretailerareadata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO AREA (id , city, name) VALUES (' + data[i].id + ',"' + data[i].city + '","' + data[i].name + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW INSERTED");
                        }, null);
                    };
                    $cordovaToast.show('Area Data Imported', 'long', 'bottom');
                });
            },
            syncinretailerdata: function () {
                return $http.get(adminurl + "retailer/find", {
                    params: {}
                })
            },

            /*id,lat,long,area,dob,type_of_area,sq_feet,store_image,name,number,email,address,ownername,ownernumber,contactname,contactnumber,timestamp, sync*/

            insertretailerdata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO RETAILER (id,lat,long,area,dob,type_of_area,sq_feet,store_image,name,number,email,address,ownername,ownernumber,contactname,contactnumber,timestamp, sync) VALUES ("' + data[i].id + '","' + data[i].lat + '","' + data[i].long + '","' + data[i].area + '","' + data[i].dob + '","' + data[i].type_of_area + '","' + data[i].sq_feet + '","' + data[i].store_image + '","' + data[i].name + '","' + data[i].number + '","' + data[i].email + '","' + data[i].address + '","' + data[i].ownername + '","' + data[i].ownernumber + '","' + data[i].contactname + '","' + data[i].contactnumber + '","' + data[i].timestamp + '", "true")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW INSERTED");
                        }, function (tx, results) {
                            console.log("RAOW NOT INSERTED");
                        });
                    };
                    $cordovaToast.show('Retailer Data Imported', 'long', 'bottom');
                });
            },
            syncinproductdata: function () {
                return $http.get(adminurl + "product/find", {
                    params: {}
                })
            },
            insertproductdata: function (data) {
                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO PRODUCT (id, name, product, encode, name2, productcode, category,video,mrp,description,age,scheme,isnew,timestamp) VALUES (' + data[i].id + ',"' + data[i].name + '","' + data[i].product + '","' + data[i].encode + '","' + data[i].name2 + '","' + data[i].productcode + '","' + data[i].category + '","' + data[i].video + '","' + data[i].mrp + '","' + data[i].description + '","' + data[i].age + '","' + data[i].scheme + '","' + data[i].isnew + '","' + data[i].timestamp + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("PRODUCT RAOW INSERTED");
                        }, function (tx, results) {
                            console.log("PRODUCT RAOW NOT INSERTED");
                        });
                    };
                    $cordovaToast.show('Product Data Imported', 'long', 'bottom');
                });
            },
            inserttopten: function (data) {

                db.transaction(function (tx) {
                    for (var i = 0; i < data.length; i++) {
                        var sqls = 'INSERT INTO TOPTEN (product, productcode, name, totalquantity) VALUES (' + data[i].product + ',"' + data[i].productcode + '","' + data[i].name + '","' + data[i].totalquantity + '")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("TOP TEN RAOW INSERTED");
                        }, function (tx, results) {
                            console.log("TOP TEN NOT INSERTED");
                        });
                    };
                    $cordovaToast.show('Top Ten Data Imported', 'long', 'bottom');
                });
            },
            synccategorydata: function (data) {
                $.jStorage.set("categoriesdata", data);
                console.log(data);
                categorydata = data;
                $cordovaToast.show('Categories Imported', 'long', 'bottom');
            },
            getcategoriesoffline: function () {
                return categorydata;
            },
            sendcartoffline: function (orid, ouid, ocart, remark, date) {
    if ($.jStorage.get("offlineorderid") > 0) {
        orderid = $.jStorage.get("offlineorderid");
    } else {
        orderid = 0
    };
    orderid += 1;
    $.jStorage.set("offlineorderid", orderid);
    db.transaction(function (tx) {
        if (ocart.length == 0) {
            var sqls = 'INSERT INTO ORDERS (orderid, userid, retailerid, id, productcode, name, quantity, mrp, totalprice, category, remark, timestamp) VALUES (' + orderid + ',' + ouid + ',' + orid + ',null,null,null,null,null,null,null," no remark ", null)';
            tx.executeSql(sqls, [], function (tx, results) {
                console.log('added no products with order id ' + orderid);
                var aid = MyServices.getareaid();
                MyServices.clearcart();
                MyServices.setretailer(0);
                if (aid > 0) {
                    window.location.replace(window.location.origin + window.location.pathname + "#/app/retailer/" + aid);
                } else {
                    window.location.replace(window.location.origin + window.location.pathname + "#/app/home");
                };
            }, function (tx, results) {
                console.log('did not add no product with no name');
            });
        } else {
            for (var i = 0; i < ocart.length; i++) {
                var sqls = 'INSERT INTO ORDERS (orderid, userid, retailerid, id, productcode, name, quantity, mrp, totalprice, category, remark, timestamp) VALUES (' + orderid + ',' + ouid + ',' + orid + ',' + ocart[i].id + ',"' + ocart[i].productcode + '","' + ocart[i].name + '",' + ocart[i].quantity + ',"' + ocart[i].mrp + '","' + ocart[i].totalprice + '","' + ocart[i].category + '","' + remark + '", "'+ date +'")';
                console.log(sqls);
                tx.executeSql(sqls, [], function (tx, results) {
                    console.log('added ' + i + ' products with order id ' + orderid);
                    
                }, function (tx, results) {
                    console.log('did not add product with name' + ocart.name);
                });
            };
            var aid = MyServices.getareaid();
            MyServices.clearcart();
            MyServices.setretailer(0);
            if (aid > 0) {
                window.location.replace(window.location.origin + window.location.pathname + "#/app/retailer/" + aid);
            } else {
                window.location.replace(window.location.origin + window.location.pathname + "#/app/home");
            };
            //$cordovaToast.show('Order Placed Offline', 'long', 'bottom');
        };
    });
},
            syncsendorders: function (sqls, dsqls) {
                //function after email success
                var emailsend = function (data, status) {
                    console.log(data);
                };
                //funtion after sms success
                var smssuccess = function (data, status) {
                    console.log(data);
                };
                //function after the success of the syncing of the order
                var syncordersuccess = function (data, status) {
                    MyServices.sendorderemail(data.id, data.retail, data.amount, data.sales, data.timestamp, data.quantity, data.remark).success(emailsend);
                    db.transaction(function (tx3) {
                        tx3.executeSql(dsqls, [], function (tx3, results3) {
                            console.log(results3);
                            console.log(data);
                            $.jStorage.set("offlineorderid", $.jStorage.get("offlineorderid") - 1);
                        }, function (tx3, results3) {});
                    });
                };
                //user and retailer and cart variables
                var retaileridtosend = 0;
                var useridtosend, retailertosend, usertosend, remarktosend, totalq, totalp, number1, number2;
                var carttosend = [];
                var userme = MyServices.getuser();
                console.log(sqls);
                db.transaction(function (tx2) {
                    //selecting idividual orders
                    tx2.executeSql(sqls, [], function (tx2, results2) {
                        for (var i = 0; i < results2.rows.length; i++) {
                            //getting retailer id and the user id of the order
                            retaileridtosend = results2.rows.item(i).retailerid;
                            useridtosend = results2.rows.item(i).userid;
                            //remark of that order
                            remarktosend = results2.rows.item(i).remark;
                            //total quantity
                            totalq += results2.rows.item(i).quantity;
                            totalp += results2.rows.item(i).totalprice;
                            //creating the cart
                            if (results2.rows.item(i).id != null) {
                                carttosend.push({
                                    id: results2.rows.item(i).id,
                                    productcode: results2.rows.item(i).productcode,
                                    name: results2.rows.item(i).name,
                                    quantity: results2.rows.item(i).quantity,
                                    mrp: results2.rows.item(i).mrp,
                                    totalprice: results2.rows.item(i).totalprice,
                                    category: results2.rows.item(i).category
                                });
                            };
                        };
                        if (retaileridtosend == 0) {
                            $.jStorage.set("offlineorderid", $.jStorage.get("offlineorderid") - 1);
                        };
                        //checking if user is the current user
                        if (useridtosend == userme.id) {
                            //retrieving the retailer object
                            var rsqls = 'SELECT * FROM RETAILER WHERE id=' + retaileridtosend;
                            tx2.executeSql(rsqls, [], function (tx2, results2) {
                                retailertosend = results2.rows.item(0);
                                retailertosend.remark = remarktosend;
                                //get number to send sms
                                number1 = retailertosend.contactnumber;
                                number2 = retailertosend.ownernumber;
                                //sending order
                                MyServices.sendSyncOrderNow(carttosend, retailertosend).success(syncordersuccess);
                                //send sms
                                if (carttosend.length > 0) {
                                    MyServices.sms(number1, number2, totalq, totalp).success(smssuccess);
                                };
                            }, function (tx2, results2) {});
                        };
                    }, function (tx2, results2) {});
                });
            },
            addnewretailer: function (data) {
                console.log(data.area);
                db.transaction(function (tx) {
                    db.transaction(function (tx) {
                        var sqls = 'INSERT INTO RETAILER (id,lat,long,area,dob,type_of_area,sq_feet,store_image,name,number,email,address,ownername,ownernumber,contactname,contactnumber,timestamp, sync) VALUES (0,"' + data.lat + '","' + data.long + '","' + data.area + '","' + data.dob + '","' + data.type_of_area + '","' + data.sq_feet + '","' + data.store_image + '","' + data.name + '","' + data.number + '","' + data.email + '","' + data.address + '","' + data.ownername + '","' + data.ownernumber + '","' + data.contactname + '","' + data.contactnumber + '",null, "false")';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            console.log("RAOW INSERTED");
                        }, function (tx, results) {
                            console.log("RAOW NOT INSERTED");
                        });
                    });
                });
            },
            editaretailer: function (data, name) {
                db.transaction(function (tx) {
                    var sqls = 'UPDATE RETAILER SET email = "' + data.email + '", ownername = "' + data.ownername + '", ownernumber = "' + data.ownernumber + '", contactname = "' + data.contactname + '", contactnumber = "' + data.contactnumber + '", sync = "false" WHERE id = ' + data.id + ' AND name ="' + name + '"';
                    console.log(sqls);
                    tx.executeSql(sqls, [], function (tx, results) {
                        console.log("RAOW UPDATED");
                    }, function (tx, results) {
                        console.log("RAOW NOT INSERTED");
                    });
                });
            },
            getalldata: function (s, c, a, r) {
                console.log(r);
                db.transaction(function (tx) {
                    var sqls = 'SELECT * FROM STATE';
                    console.log(sqls);
                    tx.executeSql(sqls, [], function (tx, results) {
                        for (var i = 0; i < results.rows.length; i++) {
                            checkstatedata.push(results.rows.item(i));
                        };
                        var sqls = 'SELECT * FROM CITY';
                        console.log(sqls);
                        tx.executeSql(sqls, [], function (tx, results) {
                            for (var i = 0; i < results.rows.length; i++) {
                                checkcitydata.push(results.rows.item(i));
                            };
                            //console.log(checkcitydata);
                            var sqls = 'SELECT * FROM AREA';
                            console.log(sqls);
                            tx.executeSql(sqls, [], function (tx, results) {
                                for (var i = 0; i < results.rows.length; i++) {
                                    checkareadata.push(results.rows.item(i));
                                };
                                console.log(checkareadata);
                                console.log(a);
                                var sqls = 'SELECT * FROM RETAILER';
                                console.log(sqls);
                                tx.executeSql(sqls, [], function (tx, results) {
                                    for (var i = 0; i < results.rows.length; i++) {
                                        checkretailerdata.push(results.rows.item(i));
                                    };
                                    //console.log(checkretailerdata);

                                    // FINAL SUCCESS //

                                    if (s.length == checkstatedata.length) {
                                        console.log("state is same");
                                    } else {
                                        console.log("Its not same");
                                        //SYNC STATE
                                        this.insertretailerstatedata(s);
                                    };
                                    if (c.length == checkcitydata.length) {
                                        console.log("city is same");
                                    } else {
                                        console.log("city not same");
                                        //SYNC CITY
                                        this.updatecitydata(c);
                                    };
                                    if (a.length == checkareadata.length) {
                                        console.log("area is same");
                                    } else {
                                        console.log("area not same");
                                        //SYNC AREA
                                        this.insertretailerareadata(a);
                                    };
                                    if (r.length == checkretailerdata.length) {
                                        console.log("retaler is same");
                                    } else {
                                        console.log("retailer not same");
                                        //SYNC RETIALER
                                        this.insertretailerdata(r);
                                    };

                                }, function (tx, results) {
                                    console.log("RAOW NOT INSERTED");
                                });
                            }, function (tx, results) {
                                console.log("RAOW NOT INSERTED");
                            });
                        }, function (tx, results) {
                            console.log("RAOW NOT INSERTED");
                        });
                    }, function (tx, results) {
                        console.log("RAOW NOT INSERTED");
                    });
                });
            },
            test1: function () {
                console.log("test is working");
            },
            test2: function () {
                this.test1();
            },
            sendretailerupdate: function (sqls) {
                var editretailersuccess = function (data, status) {

                    console.log(data);
                    /*db.transaction(function (tx) {
                    var sqls2 = 'UPDATE RETAILER SET sync = true WHERE id = '+data.id;
                    tx.executeSql(sqls, [], function (tx, results) {
                        console.log("UPDATED");
                    }, function (tx, results) {
                    });
                    //$cordovaToast.show('Top Ten Data Imported', 'long', 'bottom');
                });*/
                };
                db.transaction(function (tx) {
                    console.log(sqls);
                    MyServices.print();
                    tx.executeSql(sqls, [], function (tx, results) {
                        for (var i = 0; i < results.rows.length; i++) {
                            console.log(results.rows.item(i));
                            MyServices.editretailerdetails(results.rows.item(i)).success(editretailersuccess);
                        };
                    }, function (tx, results) {

                    });
                    //$cordovaToast.show('Top Ten Data Imported', 'long', 'bottom');
                });
            },
            sendnewretailer: function (sqls) {
                var addRetailerSuccess = function (data, status) {
                    console.log(data);
                    /*db.transaction(function (tx) {
                    var sqls2 = 'UPDATE RETAILER SET sync = true, id = '+data.id+' WHERE name = '+data.name+'AND area = '+data.area ;
                    tx.executeSql(sqls, [], function (tx, results) {
                        console.log("UPDATED");
                    }, function (tx, results) {
                    });
                    //$cordovaToast.show('Top Ten Data Imported', 'long', 'bottom');
                });*/
                };
                db.transaction(function (tx) {
                    console.log(sqls);
                    tx.executeSql(sqls, [], function (tx, results) {
                        console.log(results.rows.length);
                        for (var i = 0; i < results.rows.length; i++) {
                            console.log(results.rows.item(i));
                            MyServices.addNewRetailer(results.rows.item(i)).success(addRetailerSuccess);
                        };
                    }, function (tx, results) {

                    });
                    //$cordovaToast.show('Top Ten Data Imported', 'long', 'bottom');
                });
            },
            getorderdetail: function(oid) {
                db.transaction(function(tx){
                    tx.executeSql("SELECT * FROM ORDERS WHERE orderid ="+oid,[],function(tx, results){
                        return results.rows.item[0];
                    }, function(tx, results){});
                })
            },
            getordersbydate: function(d)
            {
                db.transaction(function(tx){
                    tx.executeSql('SELECT orders.orderid as id, retailer.name as retail, sum(orders.totalprice) as amount, orders.timestamp as timestamp FROM retailer INNER JOIN orders ON orders.retailerid = retailer.id WHERE orders.timestamp = '+d+' GROUP BY orders.orderid', [], function(tx, results){
                        console.log(results.rows.item);
                        return results.rows.item ;
                    }, function(tx, results){});
                });
            }

        }
    });