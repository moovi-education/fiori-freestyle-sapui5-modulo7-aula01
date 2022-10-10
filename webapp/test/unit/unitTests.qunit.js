/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"moovi/m07a01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
