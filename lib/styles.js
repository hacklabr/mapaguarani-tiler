var Tenures = require('./tenures');
var _ = require('underscore');

module.exports = {
  getCartoCSS: function(table) {

    var tenures = Tenures.getTenures();
    var status = Tenures.getStatus();

    var cartocss = '';

    switch(table) {
      case 'core_indigenousland':

        cartocss = '#' + table + ' { polygon-fill: #000; line-width: 2; line-opacity: 0.7; polygon-opacity: 0.7; line-color: #c9d119 ;} ';

        _.each(tenures, function(tenure) {
          if(tenure.map_color) {
            cartocss += '#' + table + '[land_tenure_id=' + tenure.id + '] { polygon-fill: ' + tenure.map_color + '; } ';
          }
        });

        _.each(status, function(stat) {
          if(stat.dashed_border) {
            cartocss += '#' + table + '[land_tenure_status_id=' + stat.id + '] { line-dasharray: 2, 2; } ';
            cartocss += '#' + table + '[zoom>=10][land_tenure_status_id=' + stat.id + '] { line-dasharray: 6, 9; } ';
          }
        });

        cartocss += '#' + table + "[zoom>=8] { line-width: 3; }";
        cartocss += '#' + table + "[zoom>=10] { line-width: 5; }";
        cartocss += '#' + table + "[zoom>=12] { polygon-opacity: 0; text-fill: #fff; text-opacity: 0.8; text-name: [name]; text-face-name: 'DejaVu Sans Book'; text-halo-fill: #000; text-halo-radius: 1; text-placement-type: simple; text-placements: 'E,NE,SE,W,NW,SW'; text-size: 20; }";

        // cartocss += '#' + table + "[zoom>=14] { text-size: 22; polygon-opacity: 0; }";

        // cartocss += '#' + table + '[class="not-exclusive-guarani-land"] { line-color: #f24e23 ; }';

        break;

      case 'core_indigenousvillage':

        cartocss = '#' + table + ' { marker-width: 3; marker-fill: #ff5c00; marker-fill-opacity: 0.9; marker-line-color: #fff; marker-line-opacity: 1; marker-line-width: 0.2; marker-type: ellipse; marker-placement: point; marker-allow-overlap: true; } ';

        cartocss += '#' + table + '[zoom>=6] { marker-width: 3.5; } ';
        cartocss += '#' + table + '[zoom>=7] { marker-width: 4; } ';
        cartocss += '#' + table + '[zoom>=8] { marker-width: 4.5; } ';
        cartocss += '#' + table + '[zoom>=9] { marker-width: 5; } ';
        cartocss += '#' + table + '[zoom>=10] { marker-width: 5.5; } ';
        cartocss += '#' + table + '[zoom>=11] { marker-width: 6; } ';

        break;

      case 'core_archaeologicalplace':

        cartocss = '#' + table + ' { marker-width: 3; marker-fill: #7000ff; marker-fill-opacity: 0.9; marker-line-color: #fff; marker-line-opacity: 1; marker-line-width: 0.2; marker-type: ellipse; marker-placement: point; marker-allow-overlap: true; } ';

        cartocss += '#' + table + '[zoom>=6] { marker-width: 3.5; } ';
        cartocss += '#' + table + '[zoom>=7] { marker-width: 4; } ';
        cartocss += '#' + table + '[zoom>=8] { marker-width: 4.5; } ';
        cartocss += '#' + table + '[zoom>=9] { marker-width: 5; } ';
        cartocss += '#' + table + '[zoom>=10] { marker-width: 5.5; } ';
        cartocss += '#' + table + '[zoom>=11] { marker-width: 6; } ';

        break;

      case 'protected_areas_baseprotectedarea':

        cartocss += '#' + table + "{ line-width: 1; polygon-opacity: 0.4; line-opacity: 0.7; }";

        cartocss += '#' + table + "[type='US'] { polygon-fill: #74c476; line-color: #74c476 ;}";
        cartocss += '#' + table + "[type='PI'] { polygon-fill: #238b45; line-color: #238b45 ;}";

        cartocss += '#' + table + '[zoom>=7] { line-width: 2; } ';
        cartocss += '#' + table + '[zoom>=8] { line-width: 2; } ';
        cartocss += '#' + table + "[zoom>=9] { line-width: 2.5; text-fill: #fff; text-opacity: 0.8; text-name: [name]; text-face-name: 'DejaVu Sans Book'; text-halo-fill: #000; text-halo-radius: 1; text-placement-type: simple; text-size: 12; } ";
        cartocss += '#' + table + '[zoom>=10] { line-width: 3; } ';
        cartocss += '#' + table + '[zoom>=12] { line-width: 4; polygon-opacity: 0; } ';

        break;

      case 'boundaries_city':

        cartocss += '#' + table + "{ line-width: 1; polygon-opacity: 0; line-opacity: 0.7; line-color: #b2e2e2; }";

        cartocss += '#' + table + '[zoom>=7] { line-width: 1; } ';
        cartocss += '#' + table + '[zoom>=8] { line-width: 1; } ';
        cartocss += '#' + table + '[zoom>=9] { line-width: 1.5; } ';
        cartocss += '#' + table + '[zoom>=10] { line-width: 1.5; } ';
        cartocss += '#' + table + "[zoom>=11] { text-fill: #fff; text-opacity: 0.8; text-name: [name]; text-face-name: 'DejaVu Sans Book'; text-halo-fill: #000; text-halo-radius: 1; text-placement-type: simple; text-size: 12; } ";

        break;

      case 'boundaries_state':

        cartocss += '#' + table + "{ line-width: 0.5; polygon-opacity: 0; line-color: #b2e2e2;}";

        cartocss += '#' + table + '[zoom>=7] { line-width: 1; } ';
        cartocss += '#' + table + '[zoom>=8] { line-width: 1; } ';
        cartocss += '#' + table + '[zoom>=9] { line-width: 1.5; } ';
        cartocss += '#' + table + '[zoom>=10] { line-width: 1.5; } ';
        cartocss += '#' + table + "[zoom>=11] { text-fill: #fff; text-opacity: 0.8; text-name: [name]; text-face-name: 'DejaVu Sans Book'; text-halo-fill: #000; text-halo-radius: 1; text-placement-type: simple; text-size: 12; } ";

        break;


      case 'boundaries_country':

        cartocss += '#' + table + "{ line-width: 1; polygon-opacity: 0; line-color: #b2e2e2;}";

        cartocss += '#' + table + '[zoom>=7] { line-width: 1; } ';
        cartocss += '#' + table + '[zoom>=8] { line-width: 1; } ';
        cartocss += '#' + table + '[zoom>=9] { line-width: 1.5; } ';
        cartocss += '#' + table + '[zoom>=10] { line-width: 1.5; } ';
        cartocss += '#' + table + "[zoom>=11] { text-fill: #fff; text-opacity: 0.8; text-name: [name]; text-face-name: 'DejaVu Sans Book'; text-halo-fill: #000; text-halo-radius: 1; text-placement-type: simple; text-size: 12; } ";

        break;

    }

    return cartocss;
  }
}
