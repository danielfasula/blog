(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{484:function(t,e,a){"use strict";a.r(e);var n=a(2),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"journal-day-2-week-11"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#journal-day-2-week-11"}},[t._v("#")]),t._v(" Journal Day 2 - Week 11")]),t._v(" "),a("h2",{attrs:{id:"daily-journal-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#daily-journal-questions"}},[t._v("#")]),t._v(" Daily Journal Questions")]),t._v(" "),a("ol",[a("li",[t._v("What is the difference between a primary key and a foreign key")])]),t._v(" "),a("p",[t._v("A Primary Key is what makes an item in a table unique from the others in that table. Foreign Keys are keys adopted from other tables used to identify a property in a different table.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("What is an Alias?")])]),t._v(" "),a("p",[t._v("An alias is declared following the first instance of the written table name and can be used in place of writting out the full table name.")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Demonstrate how you would query a join statement that would get all of a doctors patients from the following collections:")])]),t._v(" "),a("p",[t._v("`\nCREATE TABLE doctors (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),a("p",[t._v("CREATE TABLE patients (\nid INT NOT NULL AUTO_INCREMENT,\n-- CODE OMITTED\nPRIMARY KEY (id)\n)")]),t._v(" "),a("p",[t._v("CREATE TABLE doctorpatients (\nid INT NOT NULL AUTO_INCREMENT,\ndoctorId INT NOT NULL,\npatientId INT NOT NULL,")]),t._v(" "),a("p",[t._v("FOREIGN KEY (doctorId)\nREFERENCES doctors(id),\nFOREIGN KEY (patientId)\nREFERENCES patients(id),\n)\n`\nSELECT * FROM doctorpatients dp\nINNER JOIN patients p ON p.id = dp.patientId\nINNER JOIN doctors d ON d.id = dp.doctorId;")]),t._v(" "),a("h2",{attrs:{id:"project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[t._v("#")]),t._v(" Project")]),t._v(" "),a("p",[t._v("https://github.com/danielfasula/contractor")])])}),[],!1,null,null,null);e.default=o.exports}}]);