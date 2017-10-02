"use strict";


let marked = require('marked');
let toMarkdown = require('to-markdown');
let _ = require('lodash');

var MediumEditor = require('medium-editor');

require("./medium-editor.min.css");
require("./default-theme.css");
require("./editor.css");



window.addEventListener("load", function () {
	CoreDocsEditor.initialize();	
});


let CoreDocsEditor = {

	markdown_file_content: null,
	$markdown_element: null,
	$editor: null,
	is_editing: false,

	loadMarkdown: function(filename) {
		this.markdown_file_content = require("./" + filename);
	},

	renderMarkdown: function() {
		// render markdown text
		let transformed = marked(this.markdown_file_content);
		
		this.$editor.innerHTML = transformed;
	},

	// toggleEdit: function() {
	// 	if(CoreDocsEditor.$editor.attributes.contenteditable.value == "true") CoreDocsEditor.$editor.attributes.contenteditable.value = "false";
	// 	else CoreDocsEditor.$editor.attributes.contenteditable.value = "true";
	// },


	initializeMediumEditor: function() {
		// initialize MediumEditor
		var editor = new MediumEditor(this.$editor, {
			toolbar: {
				buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2', 'h3', 'pre', 'superscript', 'unorderedlist', 'orderedlist', 'removeFormat']
			}
		});

		var md_element = this.$markdown_element;

		// subscribe to change event
		editor.subscribe('editableInput', function (event, editable) {
		    // Do some work
		    md_element.innerHTML = toMarkdown(editable.innerHTML)
		});

		CoreDocsEditor.$editor.attributes.contenteditable.value = "false";
	},

	initialize: function() {
		// load dom elements
		this.$markdown_element = document.querySelector(".markdown_text");
		this.$editor = document.querySelector("#editor");

		

		this.loadMarkdown("docs.md");
		this.renderMarkdown();
		this.initializeMediumEditor();


		var toggle = document.getElementById('edit-toggle-container');
		var toggleContainer = document.getElementById('edit-toggle-toggle-container');
		var toggleNumber;

		toggle.addEventListener('click', function() {
			toggleNumber = !toggleNumber;
			if (toggleNumber) {
				toggleContainer.style.clipPath = 'inset(0 0 0 50%)';
				toggleContainer.style.backgroundColor = '#D74046';
			} else {
				toggleContainer.style.clipPath = 'inset(0 50% 0 0)';
				toggleContainer.style.backgroundColor = 'dodgerblue';
			}
			CoreDocsEditor.$editor.attributes.contenteditable.value = toggleNumber;
		});

	}
}