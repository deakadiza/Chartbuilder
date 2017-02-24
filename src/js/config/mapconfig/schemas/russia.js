import {toNumber} from 'lodash';

const countries = require('./helpers/world');

const ME = {
	label: 'Russia',
	name: 'russia',
	values: countries,
	proj: 'mercator',
	translate: [-55, 450],
	translateCartogram: [-55, 450],
	precision: 1,
	scale: 190,
	topojson : require('./../mapfiles/world/russia.topo.json'),
	feature: 'lsib_world',
	adjustLabels: function(adjusty=0,adjustx=0, label) {
	  return [adjusty,adjustx,label];
	},
	matchLogic: function(val) {
		return val;
	},
	test: function(column_val, polygon_val) {
	  return (this.matchLogic(column_val) === polygon_val.id);
	}
 }

module.exports = ME;
