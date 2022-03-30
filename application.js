
  


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
    
        $('.btn.remove').on('click',function(event){
            $(this).parent().parent().remove();
            updateTotal();
           
        });

        updateTotal();

        
        
          
      });
  }

  
      
  
  
  $(document).ready(function () {

   
    $('.new-item').on('submit', function (event) {
        event.preventDefault();
        var name = $(this).children('[name=name]').val();
        var cost = $(this).children('[name=cost]').val();
        
    $('tbody').append( '<tr>'+
                '<td class="item">' + name + '</td>' + 
                '<td class="cost">$<span>' + cost + '</span></td>' + 
                '<td class="amount"><input type="number"></td>' +
                '<td class="sum">$--.--</td>' +
                '<td class="btn-remove"><button class="btn remove">Remove</button></td>' + 
                '</tr>'
                );

                
                $(this).children('[name=name]').val('');
                $(this).children('[name=cost]').val('');
                

      });
      updateSum();

      
  })