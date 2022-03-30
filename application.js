
//add item function
  
//   $('.add-Item').on('submit',function(event){
//     event.preventDefault();
  
//     let itemName = $(this).children('[name=name]').val();
//     let cost = $(this).children('[name=cost]').val();
//     console.log(itemName,cost);
//   });
  
  


  const updateTotal = function () {
    let total = 0;
    $('.sum').each(function (index, ele) {
      total += parseFloat($(ele).html().replace("$","")) || 0;
    })
  
    $("#totalCost").html(total);
  }

  const updateSum = function(){
    $(document).on('input', '.amount input', function (event) {
        var tr = $(this).parent().parent()[0];
        let cost = parseFloat($(tr).find('.cost span').text());
        let amount = parseFloat($(this).val()) || 0;
        let sum = cost * amount;
        
        $(tr).children('.sum').html('$' + sum);
    
        updateTotal();
        
          
      });
  }

  
      
  
  
  $(document).ready(function () {

    $('.btn.remove').on('click',function(event){
        $(this).parent().parent().remove();
       
    });

    updateSum();
  
  })