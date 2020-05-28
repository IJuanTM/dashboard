(function ($) {
  $.fn.qrcode = function (options) {
    // if options is string,
    if (typeof options === 'string') {
      options = {text: options};
    }

    // set default values
    // typeNumber < 1 for automatic calculation
    options = $.extend({}, {
      render: "canvas",
      width: 512,
      height: 512,
      typeNumber: -1,
      correctLevel: QRErrorCorrectLevel.H,
      background: "rgba(0,0,0,0)",
      foreground: "#000000"
    }, options);

    const createCanvas = function () {
      // create the qrcode itself
      const qrcode = new QRCode(options.typeNumber, options.correctLevel);
      qrcode.addData(options.text);
      qrcode.make();

      // create canvas element
      const canvas = document.createElement('canvas');
      canvas.width = options.width;
      canvas.height = options.height;
      const ctx = canvas.getContext('2d');

      // compute tileW/tileH based on options.width/options.height
      const tileW = options.width / qrcode.getModuleCount();
      const tileH = options.height / qrcode.getModuleCount();

      // draw in the canvas
      for (let row = 0; row < qrcode.getModuleCount(); row++) {
        for (let col = 0; col < qrcode.getModuleCount(); col++) {
          ctx.fillStyle = qrcode.isDark(row, col) ? options.foreground : options.background;
          const w = (Math.ceil((col + 1) * tileW) - Math.floor(col * tileW));
          const h = (Math.ceil((row + 1) * tileH) - Math.floor(row * tileH));
          ctx.fillRect(Math.round(col * tileW), Math.round(row * tileH), w, h);
        }
      }
      // return just built canvas
      return canvas;
    };

    // from Jon-Carlos Rivera (https://github.com/imbcmdth)
    const createTable = function () {
      // create the qrcode itself
      const qrcode = new QRCode(options.typeNumber, options.correctLevel);
      qrcode.addData(options.text);
      qrcode.make();

      // create table element
      const $table = $('<table></table>')
        .css("width", options.width + "px")
        .css("height", options.height + "px")
        .css("border", "0px")
        .css("border-collapse", "collapse")
        .css('background-color', options.background);

      // compute tileS percentage
      const tileW = options.width / qrcode.getModuleCount();
      const tileH = options.height / qrcode.getModuleCount();

      // draw in the table
      for (let row = 0; row < qrcode.getModuleCount(); row++) {
        const $row = $('<tr></tr>').css('height', tileH + "px").appendTo($table);

        for (let col = 0; col < qrcode.getModuleCount(); col++) {
          $('<td></td>')
            .css('width', tileW + "px")
            .css('background-color', qrcode.isDark(row, col) ? options.foreground : options.background)
            .appendTo($row);
        }
      }
      // return just built canvas
      return $table;
    };


    return this.each(function () {
      const element = options.render === "canvas" ? createCanvas() : createTable();
      $(element).appendTo(this);
    });
  };
})(jQuery);
