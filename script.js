// wait for fonts to load before displaying text
$('.content').hide();

$(document).ready(function() {

  $('.content').fadeIn(100);
  // expand and close info
  $('.expand').on('click', function() {
    $('.info').removeClass('closedInfo').addClass('openedInfo');
    $('.fullInfo, .exit').show();
    $('.expand').hide();
  });
  $('.exit').on('click', function() {
    $('.info').removeClass('openedInfo').addClass('closedInfo');
    $('.fullInfo').hide();
    $('.expand').show();
  });

  // assemble names
  $('.name').css('display', 'none');

  $('.content').on('click', function() {
    $('.name').css('display', 'block');
    $('.intro').text("Click to go somewhere else.");

    var prefx = ['Aber', 'Ash', 'Ast', 'Avon', 'Axe', 'Bally', 'Beck', 'Bex', 'Bir', 'Brad', 'Caer', 'Cul', 'Drum', 'Dun', 'Foss', 'Folk', 'Inver', 'Kil', 'Kirk', 'Lang', 'Lin', 'Liver', 'Lon', 'Nor', 'Ruther', 'Shep', 'Sud', 'Tilly', 'Tre', 'Win'];
    var root = ['', '', 'bourne', 'by', 'den', 'don', 'firth', 'gill', 'ford', 'gate', 'holm', 'ing', 'king', 'leigh', 'ley', 'lin', 'mere', 'more', 'ock', 'ster', 'stow', 'wold', 'wood', 'ton', '', ''];
    var sufx = ['', '', '', 'barrow', 'berry', 'burgh', 'borough', 'bury', 'by', 'caster', 'castle', 'cester', 'chapel', 'dale', 'field', 'ham', 'minster', 'mouth', 'ness', 'pool', 'shire', 'sted', 'ster', 'ton', 'town', 'wall', 'wick', 'worth', ' Abbey', ' Castle', ' Downs', ' Glen', ' Green', ' Hay', ' Prior', ' Village', '-on-the-Water', '', '', ''];

    var a = ~~(Math.random() * prefx.length);
    var b = ~~(Math.random() * root.length);
    var c = ~~(Math.random() * sufx.length);

    var fullName = prefx[a] + root[b] + sufx[c];

    // weed out unrealistic names
    if (root[b] === '' && sufx[c] === '')
      $('.name').click();
    else if (root[b] === '' && sufx[c].charAt(0) === ' ')
      $('.name').click();
    else if (prefx[a] === 'Lin' && root[b] === 'lin')
      $('.name').click();
    else if (root[b] === 'ton' && sufx[c] === 'ton')
      $('.name').click();
    else if (root[b] === 'by' && sufx[c] === 'by')
      $('.name').click();
    else if (root[b] === 'ster' && sufx[c] === 'ster')
      $('.name').click();
    else if (fullName.length > 12 && fullName.indexOf(' ') === -1)
      $('.name').click();
    else {
      // assemble and display name
      for (var i = 0; i < fullName.length - 2; i++) {
        if (fullName[i] === fullName[i + 1] && fullName[i] === fullName[i + 2])
          $('.name').click();
        else
          $('.name').html(fullName);
      }
    }
  }); //end click
}); //end ready
