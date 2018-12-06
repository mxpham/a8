var tblValidator = {   // added in Version 4
//excerpt copied from /~heines/91.461/91.461-2012-13f/461-lecs/code/jmh-table-v5.html
//by Jesse M. Heines
  highlightError : function( strVarToTest ) {
    $( '#' + strVarToTest ).css( { "border" : "2px solid" } )  ;
    $( '#' + strVarToTest ).focus() ;
  } ,

  unhighlightError : function( strVarToTest ) {
    $( '#' + strVarToTest ).css( { "border" : "" } )  ;
  } ,
}
$('submit').click(function(){
  $(this).generate_table();
});

//validation rules and handling messages
$("#multiply-form").validate({

  rules: {
    h1: {
      required: true,
      digits:true
    },
    h2: {
      required: true,
      digits:true
    },
    v1: {
      required: true,
      digits:true
    },
    v2: {
      required: true,
      digits:true
    }
  },
  messages: {
    h1: {
      required: function() {
              tblValidator.highlightError( "h1" ) ;
              return "The minimum horizontal value is required." ;
            },
            //checks for negative numbers
      digits: function() {
        $("#h1").on('keyup', function() {
        if ($.isNumeric($(this).val())) {
            } else {
            console.log('Invalid!');
                }
              });
            }
    },
    h2: {
      required: function() {
              tblValidator.highlightError( "h2" ) ;
              return "The minimum horizontal value is required." ;
            },
      digits: function() {
        $("#h2").on('keyup', function() {
        if ($.isNumeric($(this).val())) {
            } else {
            console.log('Invalid!');
                }
              });
            }
    },
    v1: {
      required: function() {
              tblValidator.highlightError( "v1" ) ;
              return "The minimum horizontal value is required." ;
            },
      digits: function() {
        $("#v1").on('keyup', function() {
        if ($.isNumeric($(this).val())) {
            } else {
            console.log('Invalid!');
                }
              });
            }
    },
    v2: {
      required: function() {
              tblValidator.highlightError( "v2" ) ;
              return "The minimum horizontal value is required." ;
            },
      digits: function() {
        $("#v2").on('keyup', function() {
        if ($.isNumeric($(this).val())) {
            } else {
            console.log('Invalid!');
                }
            });
        }
    }
  }

});
