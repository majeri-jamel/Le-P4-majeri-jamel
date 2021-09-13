/* jqBootstrapValidation
 * A plugin for automating validation on Twitter Bootstrap formatted forms.
 *
 * v1.3.6
 *!function(a){var e,t,i,n,o;e=jQuery,t=[],i={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(a){var r=e.extend(!0,{},i);r.options=e.extend(!0,r.options,a);var l=e.unique(this.map(function(){return e(this).parents("form")[0]}).toArray());return e(l).bind("submit",function(a){var t=e(this),i=0,n=t.find("input,textarea,select").not("[type=submit],[type=image]").filter(r.options.filter);n.trigger("submit.validation").trigger("validationLostFocus.validation"),n.each(function(a,t){var n=e(t).parents(".form-group, .checkbox").first();n.hasClass("warning")&&(n.removeClass("warning").addClass("error"),i++)}),n.trigger("validationLostFocus.validation"),i?(r.options.preventSubmit&&a.preventDefault(),t.addClass("error"),e.isFunction(r.options.submitError)&&r.options.submitError(t,a,n.jqBootstrapValidation("collectErrors",!0))):(t.removeClass("error"),e.isFunction(r.options.submitSuccess)&&r.options.submitSuccess(t,a))}),this.each(function(){var a=e(this),i=a.parents(".form-group, .checkbox").first(),l=i.find(".help-block").first(),s=a.parents("form").first(),d=[];if(!l.length&&r.options.autoAdd&&r.options.autoAdd.helpBlocks&&(l=e('<div class="help-block" />'),i.append(l),t.push(l[0])),r.options.sniffHtml){var c="";if(void 0!==a.attr("pattern")&&(c="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",a.data("validationPatternMessage")&&(c=a.data("validationPatternMessage")),a.data("validationPatternMessage",c),a.data("validationPatternRegex",a.attr("pattern"))),void 0!==a.attr("max")||void 0!==a.attr("aria-valuemax")){var v=void 0!==a.attr("max")?a.attr("max"):a.attr("aria-valuemax");c="Too high: Maximum of '"+v+"'\x3c!-- data-validation-max-message to override --\x3e",a.data("validationMaxMessage")&&(c=a.data("validationMaxMessage")),a.data("validationMaxMessage",c),a.data("validationMaxMax",v)}if(void 0!==a.attr("min")||void 0!==a.attr("aria-valuemin")){var m=void 0!==a.attr("min")?a.attr("min"):a.attr("aria-valuemin");c="Too low: Minimum of '"+m+"'\x3c!-- data-validation-min-message to override --\x3e",a.data("validationMinMessage")&&(c=a.data("validationMinMessage")),a.data("validationMinMessage",c),a.data("validationMinMin",m)}void 0!==a.attr("maxlength")&&(c="Too long: Maximum of '"+a.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",a.data("validationMaxlengthMessage")&&(c=a.data("validationMaxlengthMessage")),a.data("validationMaxlengthMessage",c),a.data("validationMaxlengthMaxlength",a.attr("maxlength"))),void 0!==a.attr("minlength")&&(c="Too short: Minimum of '"+a.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",a.data("validationMinlengthMessage")&&(c=a.data("validationMinlengthMessage")),a.data("validationMinlengthMessage",c),a.data("validationMinlengthMinlength",a.attr("minlength"))),void 0===a.attr("required")&&void 0===a.attr("aria-required")||(c=r.builtInValidators.required.message,a.data("validationRequiredMessage")&&(c=a.data("validationRequiredMessage")),a.data("validationRequiredMessage",c)),void 0!==a.attr("type")&&"number"===a.attr("type").toLowerCase()&&(c=r.builtInValidators.number.message,a.data("validationNumberMessage")&&(c=a.data("validationNumberMessage")),a.data("validationNumberMessage",c)),void 0!==a.attr("type")&&"email"===a.attr("type").toLowerCase()&&(c="Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",a.data("validationValidemailMessage")?c=a.data("validationValidemailMessage"):a.data("validationEmailMessage")&&(c=a.data("validationEmailMessage")),a.data("validationValidemailMessage",c)),void 0!==a.attr("minchecked")&&(c="Not enough options checked; Minimum of '"+a.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",a.data("validationMincheckedMessage")&&(c=a.data("validationMincheckedMessage")),a.data("validationMincheckedMessage",c),a.data("validationMincheckedMinchecked",a.attr("minchecked"))),void 0!==a.attr("maxchecked")&&(c="Too many options checked; Maximum of '"+a.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",a.data("validationMaxcheckedMessage")&&(c=a.data("validationMaxcheckedMessage")),a.data("validationMaxcheckedMessage",c),a.data("validationMaxcheckedMaxchecked",a.attr("maxchecked")))}void 0!==a.data("validation")&&(d=a.data("validation").split(",")),e.each(a.data(),function(a,e){var t=a.replace(/([A-Z])/g,",$1").split(",");"validation"===t[0]&&t[1]&&d.push(t[1])});var u=d,g=[];do{e.each(d,function(a,e){d[a]=n(e)}),d=e.unique(d),g=[],e.each(u,function(t,i){if(void 0!==a.data("validation"+i+"Shortcut"))e.each(a.data("validation"+i+"Shortcut").split(","),function(a,e){g.push(e)});else if(r.builtInValidators[i.toLowerCase()]){var o=r.builtInValidators[i.toLowerCase()];"shortcut"===o.type.toLowerCase()&&e.each(o.shortcut.split(","),function(a,e){e=n(e),g.push(e),d.push(e)})}}),u=g}while(u.length>0);var h={};e.each(d,function(t,i){var o=a.data("validation"+i+"Message"),l=void 0!==o,s=!1;if(o=o||"'"+i+"' validation failed \x3c!-- Add attribute 'data-validation-"+i.toLowerCase()+"-message' to input to change this message --\x3e",e.each(r.validatorTypes,function(t,r){void 0===h[t]&&(h[t]=[]),s||void 0===a.data("validation"+i+n(r.name))||(h[t].push(e.extend(!0,{name:n(r.name),message:o},r.init(a,i))),s=!0)}),!s&&r.builtInValidators[i.toLowerCase()]){var d=e.extend(!0,{},r.builtInValidators[i.toLowerCase()]);l&&(d.message=o);var c=d.type.toLowerCase();"shortcut"===c?s=!0:e.each(r.validatorTypes,function(t,o){void 0===h[t]&&(h[t]=[]),s||c!==t.toLowerCase()||(a.data("validation"+i+n(o.name),d[o.name.toLowerCase()]),h[c].push(e.extend(d,o.init(a,i))),s=!0)})}s||e.error("Cannot find validation info for '"+i+"'")}),l.data("original-contents",l.data("original-contents")?l.data("original-contents"):l.html()),l.data("original-role",l.data("original-role")?l.data("original-role"):l.attr("role")),i.data("original-classes",i.data("original-clases")?i.data("original-classes"):i.attr("class")),a.data("original-aria-invalid",a.data("original-aria-invalid")?a.data("original-aria-invalid"):a.attr("aria-invalid")),a.bind("validation.validation",function(t,i){var n=o(a),l=[];return e.each(h,function(t,o){(n||n.length||i&&i.includeEmpty||r.validatorTypes[t].blockSubmit&&i&&i.submitting)&&e.each(o,function(e,i){r.validatorTypes[t].validate(a,n,i)&&l.push(i.message)})}),l}),a.bind("getValidators.validation",function(){return h}),a.bind("submit.validation",function(){return a.triggerHandler("change.validation",{submitting:!0})}),a.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(t,n){var d=o(a),c=[];i.find("input,textarea,select").each(function(t,i){var o=c.length;if(e.each(e(i).triggerHandler("validation.validation",n),function(a,e){c.push(e)}),c.length>o)e(i).attr("aria-invalid","true");else{var r=a.data("original-aria-invalid");e(i).attr("aria-invalid",void 0!==r&&r)}}),s.find("input,select,textarea").not(a).not('[name="'+a.attr("name")+'"]').trigger("validationLostFocus.validation"),(c=e.unique(c.sort())).length?(i.removeClass("success error").addClass("warning"),r.options.semanticallyStrict&&1===c.length?l.html(c[0]+(r.options.prependExistingHelpBlock?l.data("original-contents"):"")):l.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(r.options.prependExistingHelpBlock?l.data("original-contents"):""))):(i.removeClass("warning error success"),d.length>0&&i.addClass("success"),l.html(l.data("original-contents"))),"blur"===t.type&&i.removeClass("success")}),a.bind("validationLostFocus.validation",function(){i.removeClass("success")})})},destroy:function(){return this.each(function(){var a=e(this),i=a.parents(".form-group, .checkbox").first(),n=i.find(".help-block").first();a.unbind(".validation"),n.html(n.data("original-contents")),i.attr("class",i.data("original-classes")),a.attr("aria-invalid",a.data("original-aria-invalid")),n.attr("role",a.data("original-role")),t.indexOf(n[0])>-1&&n.remove()})},collectErrors:function(a){var t={};return this.each(function(a,i){var n=e(i),o=n.attr("name"),r=n.triggerHandler("validation.validation",{includeEmpty:!0});t[o]=e.extend(!0,r,t[o])}),e.each(t,function(a,e){0===e.length&&delete t[a]}),t},hasErrors:function(){var a=[];return this.each(function(t,i){a=a.concat(e(i).triggerHandler("getValidators.validation")?e(i).triggerHandler("validation.validation",{submitting:!0}):[])}),a.length>0},override:function(a){i=e.extend(!0,i,a)}},validatorTypes:{callback:{name:"callback",init:function(a,e){return{validatorName:e,callback:a.data("validation"+e+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,e,t){if(t.lastValue===e&&t.lastFinished)return!t.lastValid;if(!0===t.lastFinished){t.lastValue=e,t.lastValid=!0,t.lastFinished=!1;var i=t,n=a;!function(a,e){for(var t=Array.prototype.slice.call(arguments).splice(2),i=a.split("."),n=i.pop(),o=0;o<i.length;o++)e=e[i[o]];e[n].apply(this,t)}(t.callback,window,a,e,function(a){i.lastValue===a.value&&(i.lastValid=a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,n.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){n.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(a,e){return{validatorName:e,url:a.data("validation"+e+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,t,i){return""+i.lastValue==""+t&&!0===i.lastFinished?!1===i.lastValid:(!0===i.lastFinished&&(i.lastValue=t,i.lastValid=!0,i.lastFinished=!1,e.ajax({url:i.url,data:"value="+t+"&field="+a.attr("name"),dataType:"json",success:function(e){""+i.lastValue==""+e.value&&(i.lastValid=!!e.valid,e.message&&(i.message=e.message),i.lastFinished=!0,a.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){a.trigger("change.validation")},1))},failure:function(){i.lastValid=!0,i.message="ajax call failed",i.lastFinished=!0,a.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){a.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(a,e){return{regex:(t=a.data("validation"+e+"Regex"),new RegExp("^"+t+"$"))};var t},validate:function(a,e,t){return!t.regex.test(e)&&!t.negative||t.regex.test(e)&&t.negative}},required:{name:"required",init:function(a,e){return{}},validate:function(a,e,t){return!(0!==e.length||t.negative)||!!(e.length>0&&t.negative)},blockSubmit:!0},match:{name:"match",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.data("validation"+e+"Match")+'"]').first();return t.bind("validation.validation",function(){a.trigger("change.validation",{submitting:!0})}),{element:t}},validate:function(a,e,t){return e!==t.element.val()&&!t.negative||e===t.element.val()&&t.negative},blockSubmit:!0},max:{name:"max",init:function(a,e){return{max:a.data("validation"+e+"Max")}},validate:function(a,e,t){return parseFloat(e,10)>parseFloat(t.max,10)&&!t.negative||parseFloat(e,10)<=parseFloat(t.max,10)&&t.negative}},min:{name:"min",init:function(a,e){return{min:a.data("validation"+e+"Min")}},validate:function(a,e,t){return parseFloat(e)<parseFloat(t.min)&&!t.negative||parseFloat(e)>=parseFloat(t.min)&&t.negative}},maxlength:{name:"maxlength",init:function(a,e){return{maxlength:a.data("validation"+e+"Maxlength")}},validate:function(a,e,t){return e.length>t.maxlength&&!t.negative||e.length<=t.maxlength&&t.negative}},minlength:{name:"minlength",init:function(a,e){return{minlength:a.data("validation"+e+"Minlength")}},validate:function(a,e,t){return e.length<t.minlength&&!t.negative||e.length>=t.minlength&&t.negative}},maxchecked:{name:"maxchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:a.data("validation"+e+"Maxchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length>t.maxchecked&&!t.negative||t.elements.filter(":checked").length<=t.maxchecked&&t.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{minchecked:a.data("validation"+e+"Minchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length<t.minchecked&&!t.negative||t.elements.filter(":checked").length>=t.minchecked&&t.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},n=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,function(a,e,t){return e+t.toUpperCase()})},o=function(a){var t=a.val(),i=a.attr("type");return"checkbox"===i&&(t=a.is(":checked")?t:""),"radio"===i&&(t=e('input[name="'+a.attr("name")+'"]:checked').length>0?t:""),t},e.fn.jqBootstrapValidation=function(a){return i.methods[a]?i.methods[a].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof a&&a?(e.error("Method "+a+" does not exist on jQuery.jqBootstrapValidation"),null):i.methods.init.apply(this,arguments)},e.jqBootstrapValidation=function(a){e(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)},jq;var r=[],l={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(e){var t=a.extend(!0,{},l);t.options=a.extend(!0,t.options,e);var i=a.unique(this.map(function(){return a(this).parents("form")[0]}).toArray());return a(i).bind("submit",function(e){var i=a(this),n=0,o=i.find("input,textarea,select").not("[type=submit],[type=image]").filter(t.options.filter);o.trigger("submit.validation").trigger("validationLostFocus.validation"),o.each(function(e,t){var i=a(t).parents(".form-group, .checkbox").first();i.hasClass("warning")&&(i.removeClass("warning").addClass("error"),n++)}),o.trigger("validationLostFocus.validation"),n?(t.options.preventSubmit&&e.preventDefault(),i.addClass("error"),a.isFunction(t.options.submitError)&&t.options.submitError(i,e,o.jqBootstrapValidation("collectErrors",!0))):(i.removeClass("error"),a.isFunction(t.options.submitSuccess)&&t.options.submitSuccess(i,e))}),this.each(function(){var e=a(this),i=e.parents(".form-group, .checkbox").first(),n=i.find(".help-block").first(),o=e.parents("form").first(),l=[];if(!n.length&&t.options.autoAdd&&t.options.autoAdd.helpBlocks&&(n=a('<div class="help-block" />'),i.append(n),r.push(n[0])),t.options.sniffHtml){var c="";if(void 0!==e.attr("pattern")&&(c="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",e.data("validationPatternMessage")&&(c=e.data("validationPatternMessage")),e.data("validationPatternMessage",c),e.data("validationPatternRegex",e.attr("pattern"))),void 0!==e.attr("max")||void 0!==e.attr("aria-valuemax")){var v=void 0!==e.attr("max")?e.attr("max"):e.attr("aria-valuemax");c="Too high: Maximum of '"+v+"'\x3c!-- data-validation-max-message to override --\x3e",e.data("validationMaxMessage")&&(c=e.data("validationMaxMessage")),e.data("validationMaxMessage",c),e.data("validationMaxMax",v)}if(void 0!==e.attr("min")||void 0!==e.attr("aria-valuemin")){var m=void 0!==e.attr("min")?e.attr("min"):e.attr("aria-valuemin");c="Too low: Minimum of '"+m+"'\x3c!-- data-validation-min-message to override --\x3e",e.data("validationMinMessage")&&(c=e.data("validationMinMessage")),e.data("validationMinMessage",c),e.data("validationMinMin",m)}void 0!==e.attr("maxlength")&&(c="Too long: Maximum of '"+e.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",e.data("validationMaxlengthMessage")&&(c=e.data("validationMaxlengthMessage")),e.data("validationMaxlengthMessage",c),e.data("validationMaxlengthMaxlength",e.attr("maxlength"))),void 0!==e.attr("minlength")&&(c="Too short: Minimum of '"+e.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",e.data("validationMinlengthMessage")&&(c=e.data("validationMinlengthMessage")),e.data("validationMinlengthMessage",c),e.data("validationMinlengthMinlength",e.attr("minlength"))),void 0===e.attr("required")&&void 0===e.attr("aria-required")||(c=t.builtInValidators.required.message,e.data("validationRequiredMessage")&&(c=e.data("validationRequiredMessage")),e.data("validationRequiredMessage",c)),void 0!==e.attr("type")&&"number"===e.attr("type").toLowerCase()&&(c=t.builtInValidators.number.message,e.data("validationNumberMessage")&&(c=e.data("validationNumberMessage")),e.data("validationNumberMessage",c)),void 0!==e.attr("type")&&"email"===e.attr("type").toLowerCase()&&(c="Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",e.data("validationValidemailMessage")?c=e.data("validationValidemailMessage"):e.data("validationEmailMessage")&&(c=e.data("validationEmailMessage")),e.data("validationValidemailMessage",c)),void 0!==e.attr("minchecked")&&(c="Not enough options checked; Minimum of '"+e.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",e.data("validationMincheckedMessage")&&(c=e.data("validationMincheckedMessage")),e.data("validationMincheckedMessage",c),e.data("validationMincheckedMinchecked",e.attr("minchecked"))),void 0!==e.attr("maxchecked")&&(c="Too many options checked; Maximum of '"+e.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",e.data("validationMaxcheckedMessage")&&(c=e.data("validationMaxcheckedMessage")),e.data("validationMaxcheckedMessage",c),e.data("validationMaxcheckedMaxchecked",e.attr("maxchecked")))}void 0!==e.data("validation")&&(l=e.data("validation").split(",")),a.each(e.data(),function(a,e){var t=a.replace(/([A-Z])/g,",$1").split(",");"validation"===t[0]&&t[1]&&l.push(t[1])});var u=l,g=[];do{a.each(l,function(a,e){l[a]=s(e)}),l=a.unique(l),g=[],a.each(u,function(i,n){if(void 0!==e.data("validation"+n+"Shortcut"))a.each(e.data("validation"+n+"Shortcut").split(","),function(a,e){g.push(e)});else if(t.builtInValidators[n.toLowerCase()]){var o=t.builtInValidators[n.toLowerCase()];"shortcut"===o.type.toLowerCase()&&a.each(o.shortcut.split(","),function(a,e){e=s(e),g.push(e),l.push(e)})}}),u=g}while(u.length>0);var h={};a.each(l,function(i,n){var o=e.data("validation"+n+"Message"),r=void 0!==o,l=!1;if(o=o||"'"+n+"' validation failed \x3c!-- Add attribute 'data-validation-"+n.toLowerCase()+"-message' to input to change this message --\x3e",a.each(t.validatorTypes,function(t,i){void 0===h[t]&&(h[t]=[]),l||void 0===e.data("validation"+n+s(i.name))||(h[t].push(a.extend(!0,{name:s(i.name),message:o},i.init(e,n))),l=!0)}),!l&&t.builtInValidators[n.toLowerCase()]){var d=a.extend(!0,{},t.builtInValidators[n.toLowerCase()]);r&&(d.message=o);var c=d.type.toLowerCase();"shortcut"===c?l=!0:a.each(t.validatorTypes,function(t,i){void 0===h[t]&&(h[t]=[]),l||c!==t.toLowerCase()||(e.data("validation"+n+s(i.name),d[i.name.toLowerCase()]),h[c].push(a.extend(d,i.init(e,n))),l=!0)})}l||a.error("Cannot find validation info for '"+n+"'")}),n.data("original-contents",n.data("original-contents")?n.data("original-contents"):n.html()),n.data("original-role",n.data("original-role")?n.data("original-role"):n.attr("role")),i.data("original-classes",i.data("original-clases")?i.data("original-classes"):i.attr("class")),e.data("original-aria-invalid",e.data("original-aria-invalid")?e.data("original-aria-invalid"):e.attr("aria-invalid")),e.bind("validation.validation",function(i,n){var o=d(e),r=[];return a.each(h,function(i,l){(o||o.length||n&&n.includeEmpty||t.validatorTypes[i].blockSubmit&&n&&n.submitting)&&a.each(l,function(a,n){t.validatorTypes[i].validate(e,o,n)&&r.push(n.message)})}),r}),e.bind("getValidators.validation",function(){return h}),e.bind("submit.validation",function(){return e.triggerHandler("change.validation",{submitting:!0})}),e.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(r,l){var s=d(e),c=[];i.find("input,textarea,select").each(function(t,i){var n=c.length;if(a.each(a(i).triggerHandler("validation.validation",l),function(a,e){c.push(e)}),c.length>n)a(i).attr("aria-invalid","true");else{var o=e.data("original-aria-invalid");a(i).attr("aria-invalid",void 0!==o&&o)}}),o.find("input,select,textarea").not(e).not('[name="'+e.attr("name")+'"]').trigger("validationLostFocus.validation"),(c=a.unique(c.sort())).length?(i.removeClass("success error").addClass("warning"),t.options.semanticallyStrict&&1===c.length?n.html(c[0]+(t.options.prependExistingHelpBlock?n.data("original-contents"):"")):n.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(t.options.prependExistingHelpBlock?n.data("original-contents"):""))):(i.removeClass("warning error success"),s.length>0&&i.addClass("success"),n.html(n.data("original-contents"))),"blur"===r.type&&i.removeClass("success")}),e.bind("validationLostFocus.validation",function(){i.removeClass("success")})})},destroy:function(){return this.each(function(){var e=a(this),t=e.parents(".form-group, .checkbox").first(),i=t.find(".help-block").first();e.unbind(".validation"),i.html(i.data("original-contents")),t.attr("class",t.data("original-classes")),e.attr("aria-invalid",e.data("original-aria-invalid")),i.attr("role",e.data("original-role")),r.indexOf(i[0])>-1&&i.remove()})},collectErrors:function(e){var t={};return this.each(function(e,i){var n=a(i),o=n.attr("name"),r=n.triggerHandler("validation.validation",{includeEmpty:!0});t[o]=a.extend(!0,r,t[o])}),a.each(t,function(a,e){0===e.length&&delete t[a]}),t},hasErrors:function(){var e=[];return this.each(function(t,i){e=e.concat(a(i).triggerHandler("getValidators.validation")?a(i).triggerHandler("validation.validation",{submitting:!0}):[])}),e.length>0},override:function(e){l=a.extend(!0,l,e)}},validatorTypes:{callback:{name:"callback",init:function(a,e){return{validatorName:e,callback:a.data("validation"+e+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,e,t){if(t.lastValue===e&&t.lastFinished)return!t.lastValid;if(!0===t.lastFinished){t.lastValue=e,t.lastValid=!0,t.lastFinished=!1;var i=t,n=a;!function(a,e){for(var t=Array.prototype.slice.call(arguments).splice(2),i=a.split("."),n=i.pop(),o=0;o<i.length;o++)e=e[i[o]];e[n].apply(this,t)}(t.callback,window,a,e,function(a){i.lastValue===a.value&&(i.lastValid=a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,n.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){n.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(a,e){return{validatorName:e,url:a.data("validation"+e+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(e,t,i){return""+i.lastValue==""+t&&!0===i.lastFinished?!1===i.lastValid:(!0===i.lastFinished&&(i.lastValue=t,i.lastValid=!0,i.lastFinished=!1,a.ajax({url:i.url,data:"value="+t+"&field="+e.attr("name"),dataType:"json",success:function(a){""+i.lastValue==""+a.value&&(i.lastValid=!!a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1))},failure:function(){i.lastValid=!0,i.message="ajax call failed",i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(a,e){return{regex:(t=a.data("validation"+e+"Regex"),new RegExp("^"+t+"$"))};var t},validate:function(a,e,t){return!t.regex.test(e)&&!t.negative||t.regex.test(e)&&t.negative}},required:{name:"required",init:function(a,e){return{}},validate:function(a,e,t){return!(0!==e.length||t.negative)||!!(e.length>0&&t.negative)},blockSubmit:!0},match:{name:"match",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.data("validation"+e+"Match")+'"]').first();return t.bind("validation.validation",function(){a.trigger("change.validation",{submitting:!0})}),{element:t}},validate:function(a,e,t){return e!==t.element.val()&&!t.negative||e===t.element.val()&&t.negative},blockSubmit:!0},max:{name:"max",init:function(a,e){return{max:a.data("validation"+e+"Max")}},validate:function(a,e,t){return parseFloat(e,10)>parseFloat(t.max,10)&&!t.negative||parseFloat(e,10)<=parseFloat(t.max,10)&&t.negative}},min:{name:"min",init:function(a,e){return{min:a.data("validation"+e+"Min")}},validate:function(a,e,t){return parseFloat(e)<parseFloat(t.min)&&!t.negative||parseFloat(e)>=parseFloat(t.min)&&t.negative}},maxlength:{name:"maxlength",init:function(a,e){return{maxlength:a.data("validation"+e+"Maxlength")}},validate:function(a,e,t){return e.length>t.maxlength&&!t.negative||e.length<=t.maxlength&&t.negative}},minlength:{name:"minlength",init:function(a,e){return{minlength:a.data("validation"+e+"Minlength")}},validate:function(a,e,t){return e.length<t.minlength&&!t.negative||e.length>=t.minlength&&t.negative}},maxchecked:{name:"maxchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:a.data("validation"+e+"Maxchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length>t.maxchecked&&!t.negative||t.elements.filter(":checked").length<=t.maxchecked&&t.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{minchecked:a.data("validation"+e+"Minchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length<t.minchecked&&!t.negative||t.elements.filter(":checked").length>=t.minchecked&&t.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},s=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,function(a,e,t){return e+t.toUpperCase()})},d=function(e){var t=e.val(),i=e.attr("type");return"checkbox"===i&&(t=e.is(":checked")?t:""),"radio"===i&&(t=a('input[name="'+e.attr("name")+'"]:checked').length>0?t:""),t};a.fn.jqBootstrapValidation=function(e){return l.methods[e]?l.methods[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(a.error("Method "+e+" does not exist on jQuery.jqBootstrapValidation"),null):l.methods.init.apply(this,arguments)},a.jqBootstrapValidation=function(e){a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery);
 * License: MIT <http://opensource.org/licenses/mit-license.php> - see LICENSE file
 *
 * http://ReactiveRaven.github.com/jqBootstrapValidation/
 */

(function( $ ){!function(a){var e=[],t={options:{prependExistingHelpBlock:!1,sniffHtml:!0,preventSubmit:!0,submitError:!1,submitSuccess:!1,semanticallyStrict:!1,autoAdd:{helpBlocks:!0},filter:function(){return!0}},methods:{init:function(o){var r=a.extend(!0,{},t);r.options=a.extend(!0,r.options,o);var l=a.unique(this.map(function(){return a(this).parents("form")[0]}).toArray());return a(l).bind("submit",function(e){var t=a(this),i=0,n=t.find("input,textarea,select").not("[type=submit],[type=image]").filter(r.options.filter);n.trigger("submit.validation").trigger("validationLostFocus.validation"),n.each(function(e,t){var n=a(t).parents(".form-group, .checkbox").first();n.hasClass("warning")&&(n.removeClass("warning").addClass("error"),i++)}),n.trigger("validationLostFocus.validation"),i?(r.options.preventSubmit&&e.preventDefault(),t.addClass("error"),a.isFunction(r.options.submitError)&&r.options.submitError(t,e,n.jqBootstrapValidation("collectErrors",!0))):(t.removeClass("error"),a.isFunction(r.options.submitSuccess)&&r.options.submitSuccess(t,e))}),this.each(function(){var t=a(this),o=t.parents(".form-group, .checkbox").first(),l=o.find(".help-block").first(),s=t.parents("form").first(),d=[];if(!l.length&&r.options.autoAdd&&r.options.autoAdd.helpBlocks&&(l=a('<div class="help-block" />'),o.append(l),e.push(l[0])),r.options.sniffHtml){var c="";if(void 0!==t.attr("pattern")&&(c="Not in the expected format\x3c!-- data-validation-pattern-message to override --\x3e",t.data("validationPatternMessage")&&(c=t.data("validationPatternMessage")),t.data("validationPatternMessage",c),t.data("validationPatternRegex",t.attr("pattern"))),void 0!==t.attr("max")||void 0!==t.attr("aria-valuemax")){var v=void 0!==t.attr("max")?t.attr("max"):t.attr("aria-valuemax");c="Too high: Maximum of '"+v+"'\x3c!-- data-validation-max-message to override --\x3e",t.data("validationMaxMessage")&&(c=t.data("validationMaxMessage")),t.data("validationMaxMessage",c),t.data("validationMaxMax",v)}if(void 0!==t.attr("min")||void 0!==t.attr("aria-valuemin")){var m=void 0!==t.attr("min")?t.attr("min"):t.attr("aria-valuemin");c="Too low: Minimum of '"+m+"'\x3c!-- data-validation-min-message to override --\x3e",t.data("validationMinMessage")&&(c=t.data("validationMinMessage")),t.data("validationMinMessage",c),t.data("validationMinMin",m)}void 0!==t.attr("maxlength")&&(c="Too long: Maximum of '"+t.attr("maxlength")+"' characters\x3c!-- data-validation-maxlength-message to override --\x3e",t.data("validationMaxlengthMessage")&&(c=t.data("validationMaxlengthMessage")),t.data("validationMaxlengthMessage",c),t.data("validationMaxlengthMaxlength",t.attr("maxlength"))),void 0!==t.attr("minlength")&&(c="Too short: Minimum of '"+t.attr("minlength")+"' characters\x3c!-- data-validation-minlength-message to override --\x3e",t.data("validationMinlengthMessage")&&(c=t.data("validationMinlengthMessage")),t.data("validationMinlengthMessage",c),t.data("validationMinlengthMinlength",t.attr("minlength"))),void 0===t.attr("required")&&void 0===t.attr("aria-required")||(c=r.builtInValidators.required.message,t.data("validationRequiredMessage")&&(c=t.data("validationRequiredMessage")),t.data("validationRequiredMessage",c)),void 0!==t.attr("type")&&"number"===t.attr("type").toLowerCase()&&(c=r.builtInValidators.number.message,t.data("validationNumberMessage")&&(c=t.data("validationNumberMessage")),t.data("validationNumberMessage",c)),void 0!==t.attr("type")&&"email"===t.attr("type").toLowerCase()&&(c="Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e",t.data("validationValidemailMessage")?c=t.data("validationValidemailMessage"):t.data("validationEmailMessage")&&(c=t.data("validationEmailMessage")),t.data("validationValidemailMessage",c)),void 0!==t.attr("minchecked")&&(c="Not enough options checked; Minimum of '"+t.attr("minchecked")+"' required\x3c!-- data-validation-minchecked-message to override --\x3e",t.data("validationMincheckedMessage")&&(c=t.data("validationMincheckedMessage")),t.data("validationMincheckedMessage",c),t.data("validationMincheckedMinchecked",t.attr("minchecked"))),void 0!==t.attr("maxchecked")&&(c="Too many options checked; Maximum of '"+t.attr("maxchecked")+"' required\x3c!-- data-validation-maxchecked-message to override --\x3e",t.data("validationMaxcheckedMessage")&&(c=t.data("validationMaxcheckedMessage")),t.data("validationMaxcheckedMessage",c),t.data("validationMaxcheckedMaxchecked",t.attr("maxchecked")))}void 0!==t.data("validation")&&(d=t.data("validation").split(",")),a.each(t.data(),function(a,e){var t=a.replace(/([A-Z])/g,",$1").split(",");"validation"===t[0]&&t[1]&&d.push(t[1])});var u=d,g=[];do{a.each(d,function(a,e){d[a]=i(e)}),d=a.unique(d),g=[],a.each(u,function(e,n){if(void 0!==t.data("validation"+n+"Shortcut"))a.each(t.data("validation"+n+"Shortcut").split(","),function(a,e){g.push(e)});else if(r.builtInValidators[n.toLowerCase()]){var o=r.builtInValidators[n.toLowerCase()];"shortcut"===o.type.toLowerCase()&&a.each(o.shortcut.split(","),function(a,e){e=i(e),g.push(e),d.push(e)})}}),u=g}while(u.length>0);var h={};a.each(d,function(e,n){var o=t.data("validation"+n+"Message"),l=void 0!==o,s=!1;if(o=o||"'"+n+"' validation failed \x3c!-- Add attribute 'data-validation-"+n.toLowerCase()+"-message' to input to change this message --\x3e",a.each(r.validatorTypes,function(e,r){void 0===h[e]&&(h[e]=[]),s||void 0===t.data("validation"+n+i(r.name))||(h[e].push(a.extend(!0,{name:i(r.name),message:o},r.init(t,n))),s=!0)}),!s&&r.builtInValidators[n.toLowerCase()]){var d=a.extend(!0,{},r.builtInValidators[n.toLowerCase()]);l&&(d.message=o);var c=d.type.toLowerCase();"shortcut"===c?s=!0:a.each(r.validatorTypes,function(e,o){void 0===h[e]&&(h[e]=[]),s||c!==e.toLowerCase()||(t.data("validation"+n+i(o.name),d[o.name.toLowerCase()]),h[c].push(a.extend(d,o.init(t,n))),s=!0)})}s||a.error("Cannot find validation info for '"+n+"'")}),l.data("original-contents",l.data("original-contents")?l.data("original-contents"):l.html()),l.data("original-role",l.data("original-role")?l.data("original-role"):l.attr("role")),o.data("original-classes",o.data("original-clases")?o.data("original-classes"):o.attr("class")),t.data("original-aria-invalid",t.data("original-aria-invalid")?t.data("original-aria-invalid"):t.attr("aria-invalid")),t.bind("validation.validation",function(e,i){var o=n(t),l=[];return a.each(h,function(e,n){(o||o.length||i&&i.includeEmpty||r.validatorTypes[e].blockSubmit&&i&&i.submitting)&&a.each(n,function(a,i){r.validatorTypes[e].validate(t,o,i)&&l.push(i.message)})}),l}),t.bind("getValidators.validation",function(){return h}),t.bind("submit.validation",function(){return t.triggerHandler("change.validation",{submitting:!0})}),t.bind(["keyup","focus","blur","click","keydown","keypress","change"].join(".validation ")+".validation",function(e,i){var d=n(t),c=[];o.find("input,textarea,select").each(function(e,n){var o=c.length;if(a.each(a(n).triggerHandler("validation.validation",i),function(a,e){c.push(e)}),c.length>o)a(n).attr("aria-invalid","true");else{var r=t.data("original-aria-invalid");a(n).attr("aria-invalid",void 0!==r&&r)}}),s.find("input,select,textarea").not(t).not('[name="'+t.attr("name")+'"]').trigger("validationLostFocus.validation"),(c=a.unique(c.sort())).length?(o.removeClass("success error").addClass("warning"),r.options.semanticallyStrict&&1===c.length?l.html(c[0]+(r.options.prependExistingHelpBlock?l.data("original-contents"):"")):l.html('<ul class="list-unstyled alert alert-warning" role="alert"><li>'+c.join("</li><li>")+"</li></ul>"+(r.options.prependExistingHelpBlock?l.data("original-contents"):""))):(o.removeClass("warning error success"),d.length>0&&o.addClass("success"),l.html(l.data("original-contents"))),"blur"===e.type&&o.removeClass("success")}),t.bind("validationLostFocus.validation",function(){o.removeClass("success")})})},destroy:function(){return this.each(function(){var t=a(this),i=t.parents(".form-group, .checkbox").first(),n=i.find(".help-block").first();t.unbind(".validation"),n.html(n.data("original-contents")),i.attr("class",i.data("original-classes")),t.attr("aria-invalid",t.data("original-aria-invalid")),n.attr("role",t.data("original-role")),e.indexOf(n[0])>-1&&n.remove()})},collectErrors:function(e){var t={};return this.each(function(e,i){var n=a(i),o=n.attr("name"),r=n.triggerHandler("validation.validation",{includeEmpty:!0});t[o]=a.extend(!0,r,t[o])}),a.each(t,function(a,e){0===e.length&&delete t[a]}),t},hasErrors:function(){var e=[];return this.each(function(t,i){e=e.concat(a(i).triggerHandler("getValidators.validation")?a(i).triggerHandler("validation.validation",{submitting:!0}):[])}),e.length>0},override:function(e){t=a.extend(!0,t,e)}},validatorTypes:{callback:{name:"callback",init:function(a,e){return{validatorName:e,callback:a.data("validation"+e+"Callback"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(a,e,t){if(t.lastValue===e&&t.lastFinished)return!t.lastValid;if(!0===t.lastFinished){t.lastValue=e,t.lastValid=!0,t.lastFinished=!1;var i=t,n=a;!function(a,e){for(var t=Array.prototype.slice.call(arguments).splice(2),i=a.split("."),n=i.pop(),o=0;o<i.length;o++)e=e[i[o]];e[n].apply(this,t)}(t.callback,window,a,e,function(a){i.lastValue===a.value&&(i.lastValid=a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,n.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){n.trigger("change.validation")},1))})}return!1}},ajax:{name:"ajax",init:function(a,e){return{validatorName:e,url:a.data("validation"+e+"Ajax"),lastValue:a.val(),lastValid:!0,lastFinished:!0}},validate:function(e,t,i){return""+i.lastValue==""+t&&!0===i.lastFinished?!1===i.lastValid:(!0===i.lastFinished&&(i.lastValue=t,i.lastValid=!0,i.lastFinished=!1,a.ajax({url:i.url,data:"value="+t+"&field="+e.attr("name"),dataType:"json",success:function(a){""+i.lastValue==""+a.value&&(i.lastValid=!!a.valid,a.message&&(i.message=a.message),i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1))},failure:function(){i.lastValid=!0,i.message="ajax call failed",i.lastFinished=!0,e.data("validation"+i.validatorName+"Message",i.message),setTimeout(function(){e.trigger("change.validation")},1)}})),!1)}},regex:{name:"regex",init:function(a,e){return{regex:(t=a.data("validation"+e+"Regex"),new RegExp("^"+t+"$"))};var t},validate:function(a,e,t){return!t.regex.test(e)&&!t.negative||t.regex.test(e)&&t.negative}},required:{name:"required",init:function(a,e){return{}},validate:function(a,e,t){return!(0!==e.length||t.negative)||!!(e.length>0&&t.negative)},blockSubmit:!0},match:{name:"match",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.data("validation"+e+"Match")+'"]').first();return t.bind("validation.validation",function(){a.trigger("change.validation",{submitting:!0})}),{element:t}},validate:function(a,e,t){return e!==t.element.val()&&!t.negative||e===t.element.val()&&t.negative},blockSubmit:!0},max:{name:"max",init:function(a,e){return{max:a.data("validation"+e+"Max")}},validate:function(a,e,t){return parseFloat(e,10)>parseFloat(t.max,10)&&!t.negative||parseFloat(e,10)<=parseFloat(t.max,10)&&t.negative}},min:{name:"min",init:function(a,e){return{min:a.data("validation"+e+"Min")}},validate:function(a,e,t){return parseFloat(e)<parseFloat(t.min)&&!t.negative||parseFloat(e)>=parseFloat(t.min)&&t.negative}},maxlength:{name:"maxlength",init:function(a,e){return{maxlength:a.data("validation"+e+"Maxlength")}},validate:function(a,e,t){return e.length>t.maxlength&&!t.negative||e.length<=t.maxlength&&t.negative}},minlength:{name:"minlength",init:function(a,e){return{minlength:a.data("validation"+e+"Minlength")}},validate:function(a,e,t){return e.length<t.minlength&&!t.negative||e.length>=t.minlength&&t.negative}},maxchecked:{name:"maxchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{maxchecked:a.data("validation"+e+"Maxchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length>t.maxchecked&&!t.negative||t.elements.filter(":checked").length<=t.maxchecked&&t.negative},blockSubmit:!0},minchecked:{name:"minchecked",init:function(a,e){var t=a.parents("form").first().find('[name="'+a.attr("name")+'"]');return t.bind("click.validation",function(){a.trigger("change.validation",{includeEmpty:!0})}),{minchecked:a.data("validation"+e+"Minchecked"),elements:t}},validate:function(a,e,t){return t.elements.filter(":checked").length<t.minchecked&&!t.negative||t.elements.filter(":checked").length>=t.minchecked&&t.negative},blockSubmit:!0}},builtInValidators:{email:{name:"Email",type:"shortcut",shortcut:"validemail"},validemail:{name:"Validemail",type:"regex",regex:"[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",message:"Not a valid email address\x3c!-- data-validator-validemail-message to override --\x3e"},passwordagain:{name:"Passwordagain",type:"match",match:"password",message:"Does not match the given password\x3c!-- data-validator-paswordagain-message to override --\x3e"},positive:{name:"Positive",type:"shortcut",shortcut:"number,positivenumber"},negative:{name:"Negative",type:"shortcut",shortcut:"number,negativenumber"},number:{name:"Number",type:"regex",regex:"([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",message:"Must be a number\x3c!-- data-validator-number-message to override --\x3e"},integer:{name:"Integer",type:"regex",regex:"[+-]?\\d+",message:"No decimal places allowed\x3c!-- data-validator-integer-message to override --\x3e"},positivenumber:{name:"Positivenumber",type:"min",min:0,message:"Must be a positive number\x3c!-- data-validator-positivenumber-message to override --\x3e"},negativenumber:{name:"Negativenumber",type:"max",max:0,message:"Must be a negative number\x3c!-- data-validator-negativenumber-message to override --\x3e"},required:{name:"Required",type:"required",message:"This is required\x3c!-- data-validator-required-message to override --\x3e"},checkone:{name:"Checkone",type:"minchecked",minchecked:1,message:"Check at least one option\x3c!-- data-validation-checkone-message to override --\x3e"}}},i=function(a){return a.toLowerCase().replace(/(^|\s)([a-z])/g,function(a,e,t){return e+t.toUpperCase()})},n=function(e){var t=e.val(),i=e.attr("type");return"checkbox"===i&&(t=e.is(":checked")?t:""),"radio"===i&&(t=a('input[name="'+e.attr("name")+'"]:checked').length>0?t:""),t};a.fn.jqBootstrapValidation=function(e){return t.methods[e]?t.methods[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?(a.error("Method "+e+" does not exist on jQuery.jqBootstrapValidation"),null):t.methods.init.apply(this,arguments)},a.jqBootstrapValidation=function(e){a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments)}}(jQuery);jq

	var createdElements = [];

	var defaults = {
		options: {
			prependExistingHelpBlock: false,
			sniffHtml: true, // sniff for 'required', 'maxlength', etc
			preventSubmit: true, // stop the form submit event from firing if validation fails
			submitError: false, // function called if there is an error when trying to submit
			submitSuccess: false, // function called just before a successful submit event is sent to the server
            semanticallyStrict: false, // set to true to tidy up generated HTML output
			autoAdd: {
				helpBlocks: true
			},
            filter: function () {
                // return $(this).is(":visible"); // only validate elements you can see
                return true; // validate everything
            }
		},
    methods: {
      init : function( options ) {

        var settings = $.extend(true, {}, defaults);

        settings.options = $.extend(true, settings.options, options);

        var $siblingElements = this;

        var uniqueForms = $.unique(
          $siblingElements.map( function () {
            return $(this).parents("form")[0];
          }).toArray()
        );

        $(uniqueForms).bind("submit", function (e) {
          var $form = $(this);
          var warningsFound = 0;
          var $inputs = $form.find("input,textarea,select").not("[type=submit],[type=image]").filter(settings.options.filter);
          $inputs.trigger("submit.validation").trigger("validationLostFocus.validation");

          $inputs.each(function (i, el) {
            var $this = $(el),
              $controlGroup = $this.parents(".form-group, .checkbox").first();
            if (
              $controlGroup.hasClass("warning")
            ) {
              $controlGroup.removeClass("warning").addClass("error");
              warningsFound++;
            }
          });

          $inputs.trigger("validationLostFocus.validation");

          if (warningsFound) {
            if (settings.options.preventSubmit) {
              e.preventDefault();
            }
            $form.addClass("error");
            if ($.isFunction(settings.options.submitError)) {
              settings.options.submitError($form, e, $inputs.jqBootstrapValidation("collectErrors", true));
            }
          } else {
            $form.removeClass("error");
            if ($.isFunction(settings.options.submitSuccess)) {
              settings.options.submitSuccess($form, e);
            }
          }
        });

        return this.each(function(){

          // Get references to everything we're interested in
          var $this = $(this),
            $controlGroup = $this.parents(".form-group, .checkbox").first(),
            $helpBlock = $controlGroup.find(".help-block").first(),
            $form = $this.parents("form").first(),
            validatorNames = [];

          // create message container if not exists
          if (!$helpBlock.length && settings.options.autoAdd && settings.options.autoAdd.helpBlocks) {
              $helpBlock = $('<div class="help-block" />');
              $controlGroup.append($helpBlock);
							createdElements.push($helpBlock[0]);
          }

          // =============================================================
          //                                     SNIFF HTML FOR VALIDATORS
          // =============================================================

          // *snort sniff snuffle*

          if (settings.options.sniffHtml) {
            var message = "";
            // ---------------------------------------------------------
            //                                                   PATTERN
            // ---------------------------------------------------------
            if ($this.attr("pattern") !== undefined) {
              message = "Not in the expected format<!-- data-validation-pattern-message to override -->";
              if ($this.data("validationPatternMessage")) {
                message = $this.data("validationPatternMessage");
              }
              $this.data("validationPatternMessage", message);
              $this.data("validationPatternRegex", $this.attr("pattern"));
            }
            // ---------------------------------------------------------
            //                                                       MAX
            // ---------------------------------------------------------
            if ($this.attr("max") !== undefined || $this.attr("aria-valuemax") !== undefined) {
              var max = ($this.attr("max") !== undefined ? $this.attr("max") : $this.attr("aria-valuemax"));
              message = "Too high: Maximum of '" + max + "'<!-- data-validation-max-message to override -->";
              if ($this.data("validationMaxMessage")) {
                message = $this.data("validationMaxMessage");
              }
              $this.data("validationMaxMessage", message);
              $this.data("validationMaxMax", max);
            }
            // ---------------------------------------------------------
            //                                                       MIN
            // ---------------------------------------------------------
            if ($this.attr("min") !== undefined || $this.attr("aria-valuemin") !== undefined) {
              var min = ($this.attr("min") !== undefined ? $this.attr("min") : $this.attr("aria-valuemin"));
              message = "Too low: Minimum of '" + min + "'<!-- data-validation-min-message to override -->";
              if ($this.data("validationMinMessage")) {
                message = $this.data("validationMinMessage");
              }
              $this.data("validationMinMessage", message);
              $this.data("validationMinMin", min);
            }
            // ---------------------------------------------------------
            //                                                 MAXLENGTH
            // ---------------------------------------------------------
            if ($this.attr("maxlength") !== undefined) {
              message = "Too long: Maximum of '" + $this.attr("maxlength") + "' characters<!-- data-validation-maxlength-message to override -->";
              if ($this.data("validationMaxlengthMessage")) {
                message = $this.data("validationMaxlengthMessage");
              }
              $this.data("validationMaxlengthMessage", message);
              $this.data("validationMaxlengthMaxlength", $this.attr("maxlength"));
            }
            // ---------------------------------------------------------
            //                                                 MINLENGTH
            // ---------------------------------------------------------
            if ($this.attr("minlength") !== undefined) {
              message = "Too short: Minimum of '" + $this.attr("minlength") + "' characters<!-- data-validation-minlength-message to override -->";
              if ($this.data("validationMinlengthMessage")) {
                message = $this.data("validationMinlengthMessage");
              }
              $this.data("validationMinlengthMessage", message);
              $this.data("validationMinlengthMinlength", $this.attr("minlength"));
            }
            // ---------------------------------------------------------
            //                                                  REQUIRED
            // ---------------------------------------------------------
            if ($this.attr("required") !== undefined || $this.attr("aria-required") !== undefined) {
              message = settings.builtInValidators.required.message;
              if ($this.data("validationRequiredMessage")) {
                message = $this.data("validationRequiredMessage");
              }
              $this.data("validationRequiredMessage", message);
            }
            // ---------------------------------------------------------
            //                                                    NUMBER
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "number") {
              message = settings.builtInValidators.number.message;
              if ($this.data("validationNumberMessage")) {
                message = $this.data("validationNumberMessage");
              }
              $this.data("validationNumberMessage", message);
            }
            // ---------------------------------------------------------
            //                                                     EMAIL
            // ---------------------------------------------------------
            if ($this.attr("type") !== undefined && $this.attr("type").toLowerCase() === "email") {
              message = "Not a valid email address<!-- data-validator-validemail-message to override -->";
              if ($this.data("validationValidemailMessage")) {
                message = $this.data("validationValidemailMessage");
              } else if ($this.data("validationEmailMessage")) {
                message = $this.data("validationEmailMessage");
              }
              $this.data("validationValidemailMessage", message);			  
            }
            // ---------------------------------------------------------
            //                                                MINCHECKED
            // ---------------------------------------------------------
            if ($this.attr("minchecked") !== undefined) {
              message = "Not enough options checked; Minimum of '" + $this.attr("minchecked") + "' required<!-- data-validation-minchecked-message to override -->";
              if ($this.data("validationMincheckedMessage")) {
                message = $this.data("validationMincheckedMessage");
              }
              $this.data("validationMincheckedMessage", message);
              $this.data("validationMincheckedMinchecked", $this.attr("minchecked"));
            }
            // ---------------------------------------------------------
            //                                                MAXCHECKED
            // ---------------------------------------------------------
            if ($this.attr("maxchecked") !== undefined) {
              message = "Too many options checked; Maximum of '" + $this.attr("maxchecked") + "' required<!-- data-validation-maxchecked-message to override -->";
              if ($this.data("validationMaxcheckedMessage")) {
                message = $this.data("validationMaxcheckedMessage");
              }
              $this.data("validationMaxcheckedMessage", message);
              $this.data("validationMaxcheckedMaxchecked", $this.attr("maxchecked"));
            }
          }

          // =============================================================
          //                                       COLLECT VALIDATOR NAMES
          // =============================================================

          // Get named validators
          if ($this.data("validation") !== undefined) {
            validatorNames = $this.data("validation").split(",");
          }

          // Get extra ones defined on the element's data attributes
          $.each($this.data(), function (i, el) {
            var parts = i.replace(/([A-Z])/g, ",$1").split(",");
            if (parts[0] === "validation" && parts[1]) {
              validatorNames.push(parts[1]);
            }
          });

          // =============================================================
          //                                     NORMALISE VALIDATOR NAMES
          // =============================================================

          var validatorNamesToInspect = validatorNames;
          var newValidatorNamesToInspect = [];

          do // repeatedly expand 'shortcut' validators into their real validators
          {
            // Uppercase only the first letter of each name
            $.each(validatorNames, function (i, el) {
              validatorNames[i] = formatValidatorName(el);
            });

            // Remove duplicate validator names
            validatorNames = $.unique(validatorNames);

            // Pull out the new validator names from each shortcut
            newValidatorNamesToInspect = [];
            $.each(validatorNamesToInspect, function(i, el) {
              if ($this.data("validation" + el + "Shortcut") !== undefined) {
                // Are these custom validators?
                // Pull them out!
                $.each($this.data("validation" + el + "Shortcut").split(","), function(i2, el2) {
                  newValidatorNamesToInspect.push(el2);
                });
              } else if (settings.builtInValidators[el.toLowerCase()]) {
                // Is this a recognised built-in?
                // Pull it out!
                var validator = settings.builtInValidators[el.toLowerCase()];
                if (validator.type.toLowerCase() === "shortcut") {
                  $.each(validator.shortcut.split(","), function (i, el) {
                    el = formatValidatorName(el);
                    newValidatorNamesToInspect.push(el);
                    validatorNames.push(el);
                  });
                }
              }
            });

            validatorNamesToInspect = newValidatorNamesToInspect;

          } while (validatorNamesToInspect.length > 0)

          // =============================================================
          //                                       SET UP VALIDATOR ARRAYS
          // =============================================================

          var validators = {};

          $.each(validatorNames, function (i, el) {
            // Set up the 'override' message
            var message = $this.data("validation" + el + "Message");
            var hasOverrideMessage = (message !== undefined);
            var foundValidator = false;
            message =
              (
                message
                  ? message
                  : "'" + el + "' validation failed <!-- Add attribute 'data-validation-" + el.toLowerCase() + "-message' to input to change this message -->"
              )
            ;

            $.each(
              settings.validatorTypes,
              function (validatorType, validatorTemplate) {
                if (validators[validatorType] === undefined) {
                  validators[validatorType] = [];
                }
                if (!foundValidator && $this.data("validation" + el + formatValidatorName(validatorTemplate.name)) !== undefined) {
                  validators[validatorType].push(
                    $.extend(
                      true,
                      {
                        name: formatValidatorName(validatorTemplate.name),
                        message: message
                      },
                      validatorTemplate.init($this, el)
                    )
                  );
                  foundValidator = true;
                }
              }
            );

            if (!foundValidator && settings.builtInValidators[el.toLowerCase()]) {

              var validator = $.extend(true, {}, settings.builtInValidators[el.toLowerCase()]);
              if (hasOverrideMessage) {
                validator.message = message;
              }
              var validatorType = validator.type.toLowerCase();

              if (validatorType === "shortcut") {
                foundValidator = true;
              } else {
                $.each(
                  settings.validatorTypes,
                  function (validatorTemplateType, validatorTemplate) {
                    if (validators[validatorTemplateType] === undefined) {
                      validators[validatorTemplateType] = [];
                    }
                    if (!foundValidator && validatorType === validatorTemplateType.toLowerCase()) {
                      $this.data("validation" + el + formatValidatorName(validatorTemplate.name), validator[validatorTemplate.name.toLowerCase()]);
                      validators[validatorType].push(
                        $.extend(
                          validator,
                          validatorTemplate.init($this, el)
                        )
                      );
                      foundValidator = true;
                    }
                  }
                );
              }
            }

            if (! foundValidator) {
              $.error("Cannot find validation info for '" + el + "'");
            }
          });

          // =============================================================
          //                                         STORE FALLBACK VALUES
          // =============================================================

          $helpBlock.data(
            "original-contents",
            (
              $helpBlock.data("original-contents")
                ? $helpBlock.data("original-contents")
                : $helpBlock.html()
            )
          );

          $helpBlock.data(
            "original-role",
            (
              $helpBlock.data("original-role")
                ? $helpBlock.data("original-role")
                : $helpBlock.attr("role")
            )
          );

          $controlGroup.data(
            "original-classes",
            (
              $controlGroup.data("original-clases")
                ? $controlGroup.data("original-classes")
                : $controlGroup.attr("class")
            )
          );

          $this.data(
            "original-aria-invalid",
            (
              $this.data("original-aria-invalid")
                ? $this.data("original-aria-invalid")
                : $this.attr("aria-invalid")
            )
          );

          // =============================================================
          //                                                    VALIDATION
          // =============================================================

          $this.bind(
            "validation.validation",
            function (event, params) {

              var value = getValue($this);

              // Get a list of the errors to apply
              var errorsFound = [];

              $.each(validators, function (validatorType, validatorTypeArray) {
                if (value || value.length || (params && params.includeEmpty) || (!!settings.validatorTypes[validatorType].blockSubmit && params && !!params.submitting)) {
                  $.each(validatorTypeArray, function (i, validator) {
                    if (settings.validatorTypes[validatorType].validate($this, value, validator)) {
                      errorsFound.push(validator.message);
                    }
                  });
                }
              });

              return errorsFound;
            }
          );

          $this.bind(
            "getValidators.validation",
            function () {
              return validators;
            }
          );

          // =============================================================
          //                                             WATCH FOR CHANGES
          // =============================================================
          $this.bind(
            "submit.validation",
            function () {
              return $this.triggerHandler("change.validation", {submitting: true});
            }
          );
          $this.bind(
            [
              "keyup",
              "focus",
              "blur",
              "click",
              "keydown",
              "keypress",
              "change"
            ].join(".validation ") + ".validation",
            function (e, params) {

              var value = getValue($this);

              var errorsFound = [];

              $controlGroup.find("input,textarea,select").each(function (i, el) {
                var oldCount = errorsFound.length;
                $.each($(el).triggerHandler("validation.validation", params), function (j, message) {
                  errorsFound.push(message);
                });
                if (errorsFound.length > oldCount) {
                  $(el).attr("aria-invalid", "true");
                } else {
                  var original = $this.data("original-aria-invalid");
                  $(el).attr("aria-invalid", (original !== undefined ? original : false));
                }
              });

              $form.find("input,select,textarea").not($this).not("[name=\"" + $this.attr("name") + "\"]").trigger("validationLostFocus.validation");

              errorsFound = $.unique(errorsFound.sort());

              // Were there any errors?
              if (errorsFound.length) {
                // Better flag it up as a warning.
                $controlGroup.removeClass("success error").addClass("warning");

                // How many errors did we find?
                if (settings.options.semanticallyStrict && errorsFound.length === 1) {
                  // Only one? Being strict? Just output it.
                  $helpBlock.html(errorsFound[0] + 
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                } else {
                  // Multiple? Being sloppy? Glue them together into an UL.
                  $helpBlock.html("<ul class=\"list-unstyled alert alert-warning\" role=\"alert\"><li>" + errorsFound.join("</li><li>") + "</li></ul>" +
                    ( settings.options.prependExistingHelpBlock ? $helpBlock.data("original-contents") : "" ));
                }
              } else {
                $controlGroup.removeClass("warning error success");
                if (value.length > 0) {
                  $controlGroup.addClass("success");
                }
                $helpBlock.html($helpBlock.data("original-contents"));
              }

              if (e.type === "blur") {
                $controlGroup.removeClass("success");
              }
            }
          );
          $this.bind("validationLostFocus.validation", function () {
            $controlGroup.removeClass("success");
          });
        });
      },
      destroy : function( ) {

        return this.each(
          function() {

            var
              $this = $(this),
              $controlGroup = $this.parents(".form-group, .checkbox").first(),
              $helpBlock = $controlGroup.find(".help-block").first();

            // remove our events
            $this.unbind('.validation'); // events are namespaced.
            // reset help text
            $helpBlock.html($helpBlock.data("original-contents"));
            // reset classes
            $controlGroup.attr("class", $controlGroup.data("original-classes"));
            // reset aria
            $this.attr("aria-invalid", $this.data("original-aria-invalid"));
            // reset role
            $helpBlock.attr("role", $this.data("original-role"));
						// remove all elements we created
						if (createdElements.indexOf($helpBlock[0]) > -1) {
							$helpBlock.remove();
						}

          }
        );

      },
      collectErrors : function(includeEmpty) {

        var errorMessages = {};
        this.each(function (i, el) {
          var $el = $(el);
          var name = $el.attr("name");
          var errors = $el.triggerHandler("validation.validation", {includeEmpty: true});
          errorMessages[name] = $.extend(true, errors, errorMessages[name]);
        });

        $.each(errorMessages, function (i, el) {
          if (el.length === 0) {
            delete errorMessages[i];
          }
        });

        return errorMessages;

      },
      hasErrors: function() {

        var errorMessages = [];

        this.each(function (i, el) {
          errorMessages = errorMessages.concat(
            $(el).triggerHandler("getValidators.validation") ? $(el).triggerHandler("validation.validation", {submitting: true}) : []
          );
        });

        return (errorMessages.length > 0);
      },
      override : function (newDefaults) {
        defaults = $.extend(true, defaults, newDefaults);
      }
    },
		validatorTypes: {
      callback: {
        name: "callback",
        init: function ($this, name) {
          return {
            validatorName: name,
            callback: $this.data("validation" + name + "Callback"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (validator.lastValue === value && validator.lastFinished) {
            return !validator.lastValid;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;

            var rrjqbvValidator = validator;
            var rrjqbvThis = $this;
            executeFunctionByName(
              validator.callback,
              window,
              $this,
              value,
              function (data) {
                if (rrjqbvValidator.lastValue === data.value) {
                  rrjqbvValidator.lastValid = data.valid;
                  if (data.message) {
                    rrjqbvValidator.message = data.message;
                  }
                  rrjqbvValidator.lastFinished = true;
                  rrjqbvThis.data("validation" + rrjqbvValidator.validatorName + "Message", rrjqbvValidator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    rrjqbvThis.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              }
            );
          }

          return false;

        }
      },
      ajax: {
        name: "ajax",
        init: function ($this, name) {
          return {
            validatorName: name,
            url: $this.data("validation" + name + "Ajax"),
            lastValue: $this.val(),
            lastValid: true,
            lastFinished: true
          };
        },
        validate: function ($this, value, validator) {
          if (""+validator.lastValue === ""+value && validator.lastFinished === true) {
            return validator.lastValid === false;
          }

          if (validator.lastFinished === true)
          {
            validator.lastValue = value;
            validator.lastValid = true;
            validator.lastFinished = false;
            $.ajax({
              url: validator.url,
              data: "value=" + value + "&field=" + $this.attr("name"),
              dataType: "json",
              success: function (data) {
                if (""+validator.lastValue === ""+data.value) {
                  validator.lastValid = !!(data.valid);
                  if (data.message) {
                    validator.message = data.message;
                  }
                  validator.lastFinished = true;
                  $this.data("validation" + validator.validatorName + "Message", validator.message);
                  // Timeout is set to avoid problems with the events being considered 'already fired'
                  setTimeout(function () {
                    $this.trigger("change.validation");
                  }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
                }
              },
              failure: function () {
                validator.lastValid = true;
                validator.message = "ajax call failed";
                validator.lastFinished = true;
                $this.data("validation" + validator.validatorName + "Message", validator.message);
                // Timeout is set to avoid problems with the events being considered 'already fired'
                setTimeout(function () {
                  $this.trigger("change.validation");
                }, 1); // doesn't need a long timeout, just long enough for the event bubble to burst
              }
            });
          }

          return false;

        }
      },
			regex: {
				name: "regex",
				init: function ($this, name) {
					return {regex: regexFromString($this.data("validation" + name + "Regex"))};
				},
				validate: function ($this, value, validator) {
					return (!validator.regex.test(value) && ! validator.negative)
						|| (validator.regex.test(value) && validator.negative);
				}
			},
			required: {
				name: "required",
				init: function ($this, name) {
					return {};
				},
				validate: function ($this, value, validator) {
					return !!(value.length === 0  && ! validator.negative)
						|| !!(value.length > 0 && validator.negative);
				},
        blockSubmit: true
			},
			match: {
				name: "match",
				init: function ($this, name) {
					var element = $this.parents("form").first().find("[name=\"" + $this.data("validation" + name + "Match") + "\"]").first();
					element.bind("validation.validation", function () {
						$this.trigger("change.validation", {submitting: true});
					});
					return {"element": element};
				},
				validate: function ($this, value, validator) {
					return (value !== validator.element.val() && ! validator.negative)
						|| (value === validator.element.val() && validator.negative);
				},
        blockSubmit: true
			},
			max: {
				name: "max",
				init: function ($this, name) {
					return {max: $this.data("validation" + name + "Max")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value, 10) > parseFloat(validator.max, 10) && ! validator.negative)
						|| (parseFloat(value, 10) <= parseFloat(validator.max, 10) && validator.negative);
				}
			},
			min: {
				name: "min",
				init: function ($this, name) {
					return {min: $this.data("validation" + name + "Min")};
				},
				validate: function ($this, value, validator) {
					return (parseFloat(value) < parseFloat(validator.min) && ! validator.negative)
						|| (parseFloat(value) >= parseFloat(validator.min) && validator.negative);
				}
			},
			maxlength: {
				name: "maxlength",
				init: function ($this, name) {
					return {maxlength: $this.data("validation" + name + "Maxlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length > validator.maxlength) && ! validator.negative)
						|| ((value.length <= validator.maxlength) && validator.negative);
				}
			},
			minlength: {
				name: "minlength",
				init: function ($this, name) {
					return {minlength: $this.data("validation" + name + "Minlength")};
				},
				validate: function ($this, value, validator) {
					return ((value.length < validator.minlength) && ! validator.negative)
						|| ((value.length >= validator.minlength) && validator.negative);
				}
			},
			maxchecked: {
				name: "maxchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {maxchecked: $this.data("validation" + name + "Maxchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length > validator.maxchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length <= validator.maxchecked && validator.negative);
				},
        blockSubmit: true
			},
			minchecked: {
				name: "minchecked",
				init: function ($this, name) {
					var elements = $this.parents("form").first().find("[name=\"" + $this.attr("name") + "\"]");
					elements.bind("click.validation", function () {
						$this.trigger("change.validation", {includeEmpty: true});
					});
					return {minchecked: $this.data("validation" + name + "Minchecked"), elements: elements};
				},
				validate: function ($this, value, validator) {
					return (validator.elements.filter(":checked").length < validator.minchecked && ! validator.negative)
						|| (validator.elements.filter(":checked").length >= validator.minchecked && validator.negative);
				},
        blockSubmit: true
			}
		},
		builtInValidators: {
			email: {
				name: "Email",
				type: "shortcut",
				shortcut: "validemail"
			},
			validemail: {
				name: "Validemail",
				type: "regex",
				regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\\.[A-Za-z]{2,10}",
				message: "Not a valid email address<!-- data-validator-validemail-message to override -->"
			},
			passwordagain: {
				name: "Passwordagain",
				type: "match",
				match: "password",
				message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->"
			},
			positive: {
				name: "Positive",
				type: "shortcut",
				shortcut: "number,positivenumber"
			},
			negative: {
				name: "Negative",
				type: "shortcut",
				shortcut: "number,negativenumber"
			},
			number: {
				name: "Number",
				type: "regex",
				regex: "([+-]?\\\d+(\\\.\\\d*)?([eE][+-]?[0-9]+)?)?",
				message: "Must be a number<!-- data-validator-number-message to override -->"
			},
			integer: {
				name: "Integer",
				type: "regex",
				regex: "[+-]?\\\d+",
				message: "No decimal places allowed<!-- data-validator-integer-message to override -->"
			},
			positivenumber: {
				name: "Positivenumber",
				type: "min",
				min: 0,
				message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->"
			},
			negativenumber: {
				name: "Negativenumber",
				type: "max",
				max: 0,
				message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->"
			},
			required: {
				name: "Required",
				type: "required",
				message: "This is required<!-- data-validator-required-message to override -->"
			},
			checkone: {
				name: "Checkone",
				type: "minchecked",
				minchecked: 1,
				message: "Check at least one option<!-- data-validation-checkone-message to override -->"
			}
		}
	};

	var formatValidatorName = function (name) {
		return name
			.toLowerCase()
			.replace(
				/(^|\s)([a-z])/g ,
				function(m,p1,p2) {
					return p1+p2.toUpperCase();
				}
			)
		;
	};

	var getValue = function ($this) {
		// Extract the value we're talking about
		var value = $this.val();
		var type = $this.attr("type");
		if (type === "checkbox") {
			value = ($this.is(":checked") ? value : "");
		}
		if (type === "radio") {
			value = ($('input[name="' + $this.attr("name") + '"]:checked').length > 0 ? value : "");
		}
		return value;
	};

  function regexFromString(inputstring) {
		return new RegExp("^" + inputstring + "$");
	}

  /**
   * Thanks to Jason Bunting via StackOverflow.com
   *
   * http://stackoverflow.com/questions/359788/how-to-execute-a-javascript-function-when-i-have-its-name-as-a-string#answer-359910
   * Short link: http://tinyurl.com/executeFunctionByName
  **/
  function executeFunctionByName(functionName, context /*, args*/) {
    var args = Array.prototype.slice.call(arguments).splice(2);
    var namespaces = functionName.split(".");
    var func = namespaces.pop();
    for(var i = 0; i < namespaces.length; i++) {
      context = context[namespaces[i]];
    }
    return context[func].apply(this, args);
  }

	$.fn.jqBootstrapValidation = function( method ) {

		if ( defaults.methods[method] ) {
			return defaults.methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return defaults.methods.init.apply( this, arguments );
		} else {
		$.error( 'Method ' +  method + ' does not exist on jQuery.jqBootstrapValidation' );
			return null;
		}

	};

  $.jqBootstrapValidation = function (options) {
    $(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this,arguments);
  };

})( jQuery );
