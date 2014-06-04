var vendor = (function(p) {
  var i = -1, n = p.length, s = document.body.style;
  while (++i < n) if (p[i] + "Transform" in s) return "-" + p[i].toLowerCase() + "-";
  return "";
})(["webkit", "ms", "Moz", "O"]);

d3.select('body')
	.append('div')

d3.selectAll('.ship')
	.style(vendor + 'animation-delay', function() {
		return (Math.random() * 4) + 's'
	})
	.style(vendor + 'animation-duration', function() {
		return 4 + (Math.random() * 8) + 's'
	})
