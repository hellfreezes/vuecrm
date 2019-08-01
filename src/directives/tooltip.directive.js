export default {
  bind(el, {value}) {
    M.Tooltip.init(el, {html: value});
  },
  // дестроер
  unbind(el) {
    const tooltip = M.Tooltip.getInstance(el);
    if (tooltip && tooltip.destroy) {
      tooltip.destroy();
    }
  }
}
