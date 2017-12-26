$(document).ready(function() {

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

  $('.intro, .name').on('click', function() {
    $('.name').css('display', 'block');
    $('.intro').text("Click to go somewhere else.");

    var prefx = ['Aber', 'Ash', 'Ast', 'Avon', 'Bally', 'Beck', 'Bex', 'Bir', 'Brad', 'Cul', 'Drum', 'Dun', 'Foss', 'Folk', 'Inver', 'Kil', 'Kirk', 'Lang', 'Lin', 'Liver', 'Lon', 'Nor', 'Shep', 'Sud', 'Tre', 'Win'];
    var root = ['', '', 'bourne', 'den', 'don', 'firth', 'ford', 'gate', 'holm', 'ing', 'king', 'leigh', 'ley', 'mere', 'more', 'ock', 'stow', 'wold', 'wood', 'ton', '', ''];
    var sufx = ['', '', 'berry', 'borough', 'bury', 'by', 'caster', 'castle', 'cester', 'chapel', 'dale', 'field', 'ham', 'minster', 'mouth', 'ness', 'pool', 'shire', 'sted', 'ster', 'ton', 'town', 'wall', 'wick', 'worth', ' Abbey', ' Castle', ' Downs', ' Glen', ' Green', ' Prior', ' Village', '-on-the-Water', '', ''];

    var i = ~~(Math.random() * prefx.length);
    var j = ~~(Math.random() * root.length);
    var k = ~~(Math.random() * sufx.length);

    var fullName = prefx[i] + root[j] + sufx[k];

    // weed out overly long or short names, etc
    if (root[j] === '' && sufx[k] === '')
      $('.name').click();
    else if (root[j] === 'ton' && sufx[k] === 'town')
      $('.name').click();
    else if (root[j] === '' && sufx[k].charAt(0) === ' ')
      $('.name').click();
    else if (fullName.length > 12 && fullName.indexOf(' ') === -1)
      $('.name').click();
    else {
      for (var i = 0; i < fullName.length - 2; i++) {
        if (fullName[i] === fullName[i + 1] && fullName[i] === fullName[i + 2])
          $('.name').click();
        else
          $('.name').html(fullName);
      }
    }
  });
});
