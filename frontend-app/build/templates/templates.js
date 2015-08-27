this["__templates"] = this["__templates"] || {};
this["__templates"]["index"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "                <li><a href=\"#/category/"
    + escapeExpression(lambda((depth0 != null ? depth0.id : depth0), depth0))
    + "\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</a></li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<nav>\n    <div class=\"nav-wrapper\">\n        <a href=\"#!\" class=\"brand-logo\">\n            <img src=\"http://www.tattooset.com/images/logo.png\" style=\"width: 100px; margin-top: 10px;\"/>\n        </a>\n        <ul class=\"right hide-on-med-and-down\">\n            <li><a href=\"sass.html\"><i class=\"material-icons\">search</i></a></li>\n            <li><a href=\"badges.html\"><i class=\"material-icons\">view_module</i></a></li>\n            <li><a href=\"collapsible.html\"><i class=\"material-icons\">refresh</i></a></li>\n            <li><a href=\"mobile.html\"><i class=\"material-icons\">more_vert</i></a></li>\n        </ul>\n\n        <ul id=\"slide-out\" class=\"side-nav\">\n";
  stack1 = helpers.each.call(depth0, ((helpers.utils || (depth0 && depth0.utils) || helperMissing).call(depth0, "categories", {"name":"utils","hash":{},"data":data})), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </ul>\n        <a href=\"#\" data-activates=\"slide-out\" class=\"button-collapse\" data-js=\"button-collapse\"><i class=\"mdi-navigation-menu\"></i></a>\n    </div>\n</nav>\n\n<div data-js=\"main-content-region\"></div>\n\n\n<footer class=\"page-footer\">\n    <div class=\"footer-copyright\">\n        <div class=\"container\">© 2015 Copyright</div>\n    </div>\n</footer>\n";
},"useData":true});
this["__templates"]["item"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<span style=\"padding: 3px; background-color:#eee; border-radius: 5px;\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</span> ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<div class=\"col s12\" data-js=\"item-container\">\n    <div class=\"row\">\n        <div class=\"col s12\">\n            <div class=\"card\">\n                <div class=\"card-image\" style=\"\n                    background: url("
    + escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"image","hash":{},"data":data}) : helper)))
    + ") center center;\n                    -webkit-background-size: cover;\n                    -moz-background-size: cover;\n                    -o-background-size: cover;\n                    background-size: cover;\n                    height: 250px;\n                    width: 100%;\n                \">\n                </div>\n                <div class=\"card-content\">\n                    <p><img src=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.avatar : stack1), depth0))
    + "\" /> "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.name : stack1), depth0))
    + "</p>\n                    <p>Tags: ";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.tags : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
},"useData":true});
this["__templates"]["list"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"row\">\n        <div class=\"col s12\">\n            <div class=\"card-panel teal\">\n                <span class=\"white-text\">"
    + escapeExpression(((helpers.utils || (depth0 && depth0.utils) || helperMissing).call(depth0, "categorySelectedDescription", {"name":"utils","hash":{},"data":data})))
    + "</span>\n            </div>\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<br>\n";
  stack1 = helpers['if'].call(depth0, ((helpers.utils || (depth0 && depth0.utils) || helperMissing).call(depth0, "categorySelectedDescription", {"name":"utils","hash":{},"data":data})), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<div class=\"center\" style=\"margin-top: 10px;\">\n    <i class=\"small material-icons\" data-js=\"view-module\">view_module</i>\n    <i class=\"small material-icons\" data-js=\"view-list\">view_list</i>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\" data-js=\"items-container\"></div>\n</div>\n";
},"useData":true});