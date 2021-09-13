$(function()
{	
	$("input,textarea").jqBootstrapValidation(
    {
     	preventSubmit: true,
     	submitSuccess: function($form, event)
	 	{			$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:!0,submitSuccess:function(t,e){if(!t.attr("action")){e.preventDefault();var i=function(t){var e="./includes/"+t.attr("id")+".php";t.attr("template-path")&&(e=t.attr("template-path")+"/includes/"+t.attr("id")+".php");return e}(t),s={};t.find("input, textarea, option:selected").each(function(t){var e=$(this).val(),i=$(this).attr("id");$(this).is(":checkbox")?e=$(this).is(":checked"):$(this).is(":radio")?e=$(this).val()+" = "+$(this).is(":checked"):$(this).is("option:selected")&&(i=$(this).parent().attr("id")),s[i]=e}),$.ajax({url:i,type:"POST",data:s,cache:!1,success:function(){t.is("[success-msg]")?t.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+t.attr("success-msg")+"</strong></div></div>"):window.location.replace(t.attr("success-url")),t.trigger("reset")},error:function(){0==$("#form-alert").length&&t.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+t.attr("fail-msg")+"</strong></div></div>")}})}},filter:function(){return $(this).is(":visible")}})});
			if(!$form.attr('action')) // Check form doesnt have action attribute
			{
				event.preventDefault(); // prevent default submit behaviour
			
				var processorFile = getProcessorPath($form);
				var formData = {};

				$form.find("input, textarea, option:selected").each(function(e) // Loop over form objects build data object
				{		
					var fieldData =  $(this).val();
					var fieldID =  $(this).attr('id');
				
					if($(this).is(':checkbox')) // Handle Checkboxes
					{
						fieldData = $(this).is(":checked");
					}
					else if($(this).is(':radio')) // Handle Radios
					{
						fieldData = $(this).val()+' = '+$(this).is(":checked");
					}
					else if($(this).is('option:selected')) // Handle Option Selects
					{
						fieldID = $(this).parent().attr('id');
					}
					
					formData[fieldID] = fieldData;		
				});
	
				$.ajax({
		        	url: processorFile,
		    		type: "POST",
		    		data: formData,
		    		cache: false,
		    		success: function() // Success
		 			{  
						if($form.is('[success-msg]')) // Show Success Message
						{
							$form.append("<div id='form-alert'><div class='alert alert-success'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+$form.attr('success-msg')+"</strong></div></div>");
						}
						else // Re-Direct
						{
							window.location.replace($form.attr('success-url'));
						}	
						
						$form.trigger("reset"); // Clear Form	
		 	   		},
			   		error: function() // Fail
			   		{
						if($('#form-alert').length == 0)
						{
							$form.append("<div id='form-alert'><div class='alert alert-danger'><button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button><strong>"+$form.attr('fail-msg')+"</strong></div></div>");
						}	
			   		},
		   		});
			}
         },
         filter: function() // Handle hidden form elements
		 {
			 return $(this).is(":visible");
         },
	 });
	 
	 // Get Path to processor PHP file
	 function getProcessorPath(form)
	 {
		var path = "./includes/"+form.attr('id')+".php";
		
		if(form.attr('template-path')) // Check For Template path
		{
			path = form.attr('template-path')+"/includes/"+form.attr('id')+".php";
		}
		
	 	return path
	 }
});