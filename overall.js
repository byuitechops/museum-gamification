(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['overall'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<link rel=\"stylesheet\" type=\"text/css\" href=\"https://localhost:8000/widget.css\">\r\n<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1220 231.3\" style=\"enable-background:new 0 0 1220 231.3;\" xml:space=\"preserve\">\r\n<style type=\"text/css\">\r\n    @import url('https://fonts.googleapis.com/css?family=Roboto:900');\r\n	.st0o{fill:#E9E6D9;}\r\n	.st1o{fill:#CDCBBF;}\r\n	.st2o{fill:none;stroke:#CDCBBF;stroke-width:4;stroke-miterlimit:10;}\r\n	.st3o{fill:#30302F;}\r\n	.st4o{font-family:'Roboto'; font-weight: 900;}\r\n	.st5o{font-size:13.5px;}\r\n	.st6o{font-size:31px;}\r\n	.st7o{fill:#2F2F2F;}\r\n	.st8o{font-size:30.6015px;}\r\n	.st9o{fill:#40B771;}\r\n	.st10o{font-size:22.2484px;}\r\n	.st11o{fill:#E8E5D9;}\r\n	.st12o{fill:none;stroke:#2F2F2F;stroke-width:3.415;stroke-miterlimit:10;}\r\n</style>\r\n<g id=\"Layer_1\">\r\n	<rect id=\"background\" y=\"-0.1\" class=\"st0o\" width=\"1220\" height=\"231.4\"/>\r\n	<g id=\"overall_1_\">\r\n		<rect x=\"29.1\" class=\"st0o\" width=\"1162.7\" height=\"230.8\"/>\r\n		<g>\r\n			<g>\r\n				<path class=\"st1o\" d=\"M1173.9,3.9v13.8v195.8v13.8h-7.8H47.7h-7.8v-13.8V17.7V3.9h7.8h1118.4H1173.9 M1177.9-0.1h-4h-7.8H47.7\r\n					h-7.8h-4v4v13.8v195.8v13.8v4h4h7.8h1118.4h7.8h4v-4v-13.8V17.7V3.9V-0.1L1177.9-0.1z\"/>\r\n			</g>\r\n		</g>\r\n		<line class=\"st2o\" x1=\"28.6\" y1=\"1.8\" x2=\"28.6\" y2=\"231.3\"/>\r\n		<line class=\"st2o\" x1=\"1190.2\" y1=\"2.6\" x2=\"1190.2\" y2=\"230.8\"/>\r\n		<g id=\"title_1_\">\r\n			<text transform=\"matrix(0.9222 0 0 1 90.9609 62.2734)\" class=\"st3o st4o st5o\">Modern Arts and Propaganda</text>\r\n			<text transform=\"matrix(0.83 0 0 1 90.9604 48.8413)\" class=\"st3o st4o st6o\">FDHUM 214</text>\r\n		</g>\r\n		<g>\r\n			<g>\r\n				<path class=\"st7o\" d=\"M1128,127.8v3.4V179v3.4h-7.2H92.1h-7.2V179v-47.8v-3.4h7.2h1028.7L1128,127.8 M1131.4,124.4h-3.4h-7.2\r\n					H92.1h-7.2h-3.4v3.4v3.4V179v3.4v3.4h3.4h7.2h1028.7h7.2h3.4v-3.4V179v-47.8v-3.4L1131.4,124.4L1131.4,124.4z\"/>\r\n			</g>\r\n		</g>\r\n		<text transform=\"matrix(0.83 0 0 1 90.0474 92.5459)\" class=\"st3o st4o st8o\">COURSE PROGRESS</text>\r\n		<g id=\"dynamic_1_\" transform=\"translate("
    + alias4(((helper = (helper = helpers.arrow || (depth0 != null ? depth0.arrow : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"arrow","hash":{},"data":data}) : helper)))
    + ")\">\r\n			<text id=\"value_4_\" transform=\"matrix(0.83 0 0 1 60.3604 112.1953)\" class=\"st9o st4o st10o\">"
    + alias4(((helper = (helper = helpers.overallEarned || (depth0 != null ? depth0.overallEarned : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overallEarned","hash":{},"data":data}) : helper)))
    + "/"
    + alias4(((helper = (helper = helpers.overallPossible || (depth0 != null ? depth0.overallPossible : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"overallPossible","hash":{},"data":data}) : helper)))
    + "</text>\r\n			<g id=\"arrow_2_\">\r\n				<polygon class=\"st9o\" points=\"80.3,115.6 104.9,115.6 92.6,128.1 				\"/>\r\n				<path class=\"st11o\" d=\"M101.9,116.9l-9.3,9.4l-9.3-9.4h9.3H101.9 M107.9,114.4h-6h-9.3h-9.3h-6l4.2,4.3l9.3,9.4l1.8,1.8l1.8-1.8\r\n					l9.3-9.4L107.9,114.4L107.9,114.4z\"/>\r\n			</g>\r\n		</g>\r\n		<rect id=\"bar_2_\" x=\"90.2\" y=\"131.3\" class=\"st9o\" width=\""
    + alias4(((helper = (helper = helpers.barWidth || (depth0 != null ? depth0.barWidth : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"barWidth","hash":{},"data":data}) : helper)))
    + "\" height=\"47.8\"/>\r\n		<g>\r\n			<g>\r\n				<path class=\"st0o\" d=\"M1120.6,135.3v39.6H92.4v-39.6L1120.6,135.3 M1128,127.8h-7.2H92.1h-7.2v3.4V179v3.4h7.2h1028.7h7.2V179\r\n					v-47.8L1128,127.8L1128,127.8z\"/>\r\n			</g>\r\n		</g>\r\n		<line class=\"st12o\" x1=\"911.6\" y1=\"127.8\" x2=\"911.6\" y2=\"182.3\"/>\r\n		<text transform=\"matrix(0.83 0 0 1 895.4082 210.1953)\" class=\"st7o st4o st10o\">"
    + alias4(((helper = (helper = helpers.passing || (depth0 != null ? depth0.passing : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"passing","hash":{},"data":data}) : helper)))
    + "</text>\r\n	</g>\r\n</g>\r\n<g id=\"Layer_2\">\r\n</g>\r\n</svg>\r\n";
},"useData":true});
})();