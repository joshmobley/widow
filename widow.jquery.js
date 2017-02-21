$('document').ready( function(){

   $('body').find('h1,h2,h3,h4,h5,p').each( function(){

        let content = $(this).html();
        let split = content.split(" ");

        if( split.length > 4 ){
            let last = split[split.length - 1];
            last = '&nbsp;' + last;
            split.splice(-1, 1);
            $(this).html( split.join(" ") ).append(last);
        }
   });
   
});