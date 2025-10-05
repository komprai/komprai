import { defineComponent, computed, watchEffect, unref, withCtx, createTextVNode, createVNode, toDisplayString, createBlock, openBlock, Fragment, renderList, createCommentVNode, ref, mergeProps, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, renderSlot, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { Motion } from 'motion-v';
import { _ as _export_sfc } from './server.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useColorMode, useCycleList, createInjectionState, reactiveOmit } from '@vueuse/core';
import emblaCarouselVue from 'embla-carousel-vue';
import { ArrowLeft, ArrowRight, ChevronLeftIcon, MoreHorizontal, ChevronRightIcon } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';
import { Primitive, useForwardPropsEmits, PaginationRoot, PaginationList, useForwardProps, PaginationPrev, PaginationListItem, PaginationEllipsis, PaginationNext, PaginationFirst, PaginationLast } from 'reka-ui';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'ipx';
import 'vue-router';

const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SparklesText",
  __ssrInlineRender: true,
  props: {
    text: {},
    sparklesCount: { default: 10 },
    colors: { default: () => ({ first: "#9E7AFF", second: "#FE8BBB" }) },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const sparkles = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["text-3xl font-bold", props.class]
      }, _attrs))}><span class="relative inline-block"><!--[-->`);
      ssrRenderList(sparkles.value, (sparkle) => {
        _push(ssrRenderComponent(unref(Motion), {
          initial: { opacity: 0, scale: 0, rotate: 75 },
          animate: {
            opacity: [0, 1, 0],
            scale: [0, sparkle.scale, 0],
            rotate: [75, 120, 150]
          },
          transition: {
            duration: 0.8,
            repeat: Infinity,
            delay: sparkle.delay
          },
          as: "svg",
          class: "pointer-events-none absolute z-20",
          style: {
            left: sparkle.x,
            top: sparkle.y,
            opacity: 0
          },
          width: "21",
          height: "21",
          viewBox: "0 0 21 21"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<path d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"${ssrRenderAttr("fill", sparkle.color)}${_scopeId}></path>`);
            } else {
              return [
                createVNode("path", {
                  d: "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",
                  fill: sparkle.color
                }, null, 8, ["fill"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--> ${ssrInterpolate(__props.text)}</span></div>`);
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/sparkles-text/SparklesText.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  __ssrInlineRender: true,
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emits);
    __expose({
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "carousel",
        class: unref(cn)("relative", props.class),
        role: "region",
        "aria-roledescription": "carousel",
        tabindex: "0"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        canScrollNext: unref(canScrollNext),
        canScrollPrev: unref(canScrollPrev),
        carouselApi: unref(carouselApi),
        carouselRef: unref(carouselRef),
        orientation: unref(orientation),
        scrollNext: unref(scrollNext),
        scrollPrev: unref(scrollPrev)
      }, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/Carousel.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "carouselRef",
        ref: carouselRef,
        "data-slot": "carousel-content",
        class: "overflow-hidden"
      }, _attrs))}><div${ssrRenderAttrs(mergeProps({
        class: unref(cn)(
          "flex",
          unref(orientation) === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          props.class
        )
      }, _ctx.$attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "carousel-item",
        role: "group",
        "aria-roledescription": "slide",
        class: unref(cn)(
          "min-w-0 shrink-0 grow-0 basis-full",
          unref(orientation) === "horizontal" ? "pl-4" : "pt-4",
          props.class
        )
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "Button",
  __ssrInlineRender: true,
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Primitive), mergeProps({
        "data-slot": "button",
        as: __props.as,
        "as-child": __props.asChild,
        class: unref(cn)(unref(buttonVariants)({ variant: __props.variant, size: __props.size }), props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/button/Button.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  __ssrInlineRender: true,
  props: {
    variant: { default: "outline" },
    size: { default: "icon" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$d), mergeProps({
        "data-slot": "carousel-next",
        disabled: !unref(canScrollNext),
        class: unref(cn)(
          "absolute size-8 rounded-full",
          unref(orientation) === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: __props.variant,
        size: __props.size,
        onClick: unref(scrollNext)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowRight), null, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Next Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowRight)),
                createVNode("span", { class: "sr-only" }, "Next Slide")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "CarouselPrevious",
  __ssrInlineRender: true,
  props: {
    variant: { default: "outline" },
    size: { default: "icon" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$d), mergeProps({
        "data-slot": "carousel-previous",
        disabled: !unref(canScrollPrev),
        class: unref(cn)(
          "absolute size-8 rounded-full",
          unref(orientation) === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          props.class
        ),
        variant: __props.variant,
        size: __props.size,
        onClick: unref(scrollPrev)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ArrowLeft), null, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>Previous Slide</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ArrowLeft)),
                createVNode("span", { class: "sr-only" }, "Previous Slide")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    page: {},
    defaultPage: {},
    itemsPerPage: {},
    total: {},
    siblingCount: {},
    disabled: { type: Boolean },
    showEdges: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:page"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = reactiveOmit(props, "class");
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationRoot), mergeProps({ "data-slot": "pagination" }, unref(forwarded), {
        class: unref(cn)("mx-auto flex w-full justify-center", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/Pagination.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "PaginationContent",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationList), mergeProps({ "data-slot": "pagination-content" }, unref(delegatedProps), {
        class: unref(cn)("flex flex-row items-center gap-1", props.class)
      }, _attrs), {
        default: withCtx((slotProps, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", slotProps, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", slotProps)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationContent.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "PaginationEllipsis",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationEllipsis), mergeProps({ "data-slot": "pagination-ellipsis" }, unref(delegatedProps), {
        class: unref(cn)("flex size-9 items-center justify-center", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(MoreHorizontal), { class: "size-4" }, null, _parent2, _scopeId));
              _push2(`<span class="sr-only"${_scopeId}>More pages</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(MoreHorizontal), { class: "size-4" }),
                createVNode("span", { class: "sr-only" }, "More pages")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationEllipsis.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "PaginationFirst",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationFirst), mergeProps({
        "data-slot": "pagination-first",
        class: unref(cn)(unref(buttonVariants)({ variant: "ghost", size: __props.size }), "gap-1 px-2.5 sm:pr-2.5", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeftIcon), null, null, _parent2, _scopeId));
              _push2(`<span class="hidden sm:block"${_scopeId}>First</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeftIcon)),
                createVNode("span", { class: "hidden sm:block" }, "First")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationFirst.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PaginationItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {},
    size: { default: "icon" },
    class: {},
    isActive: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size", "isActive");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationListItem), mergeProps({ "data-slot": "pagination-item" }, unref(delegatedProps), {
        class: unref(cn)(
          unref(buttonVariants)({
            variant: __props.isActive ? "outline" : "ghost",
            size: __props.size
          }),
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PaginationLast",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationLast), mergeProps({
        "data-slot": "pagination-last",
        class: unref(cn)(unref(buttonVariants)({ variant: "ghost", size: __props.size }), "gap-1 px-2.5 sm:pr-2.5", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<span class="hidden sm:block"${_scopeId}>Last</span>`);
              _push2(ssrRenderComponent(unref(ChevronRightIcon), null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode("span", { class: "hidden sm:block" }, "Last"),
                createVNode(unref(ChevronRightIcon))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationLast.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PaginationNext",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationNext), mergeProps({
        "data-slot": "pagination-next",
        class: unref(cn)(unref(buttonVariants)({ variant: "ghost", size: __props.size }), "gap-1 px-2.5 sm:pr-2.5", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(`<span class="hidden sm:block"${_scopeId}>Next</span>`);
              _push2(ssrRenderComponent(unref(ChevronRightIcon), null, null, _parent2, _scopeId));
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode("span", { class: "hidden sm:block" }, "Next"),
                createVNode(unref(ChevronRightIcon))
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationNext.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PaginationPrevious",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    size: { default: "default" },
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = reactiveOmit(props, "class", "size");
    const forwarded = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(PaginationPrev), mergeProps({
        "data-slot": "pagination-previous",
        class: unref(cn)(unref(buttonVariants)({ variant: "ghost", size: __props.size }), "gap-1 px-2.5 sm:pr-2.5", props.class)
      }, unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, () => {
              _push2(ssrRenderComponent(unref(ChevronLeftIcon), null, null, _parent2, _scopeId));
              _push2(`<span class="hidden sm:block"${_scopeId}>Previous</span>`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ChevronLeftIcon)),
                createVNode("span", { class: "hidden sm:block" }, "Previous")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pagination/PaginationPrevious.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "BalanceSlider",
  __ssrInlineRender: true,
  props: {
    initialValue: { default: 50 },
    leftColor: { default: "#e68a00" },
    rightColor: { default: "#ffffff" },
    minShiftLimit: { default: 40 },
    maxShiftLimit: { default: 68 },
    leftContent: { default: "LEFT" },
    rightContent: { default: "RIGHT" },
    indicatorColor: { default: "#FFFFFF" },
    borderRadius: { default: 8 }
  },
  setup(__props) {
    const props = __props;
    const value = ref(props.initialValue);
    const active = ref(0);
    const shift = computed(
      () => value.value > props.minShiftLimit && value.value < props.maxShiftLimit ? 1 : 0
    );
    const sliderStyles = computed(() => ({
      "--value": value.value,
      "--shift": shift.value,
      "--active": active.value,
      "--leftContent": `"${props.leftContent} "`,
      "--rightContent": `" ${props.rightContent}"`,
      "--indicatorColor": indicatorColorHsl.value
    }));
    const sliderLabelStyles = computed(() => ({
      "--shift": shift.value
    }));
    const sliderTrackStyles = computed(() => ({
      "--value": value.value,
      "--shift": shift.value,
      "--leftColor": leftColorHsl.value,
      "--rightColor": rightColorHsl.value
    }));
    const leftColorHsl = computed(() => {
      const [h2, s] = hexToHsl(props.leftColor);
      const alpha = 0.4;
      const lightness = 24 + 30 * (100 - value.value) / 100;
      return `hsl(${h2} ${s}% ${lightness}% / ${alpha})`;
    });
    const rightColorHsl = computed(() => {
      const [h2, s, l] = hexToHsl(props.rightColor);
      const alpha = 0.1 + 0.4 * (100 - value.value) / 100;
      return `hsl(${h2} ${s}% ${l}% / ${alpha})`;
    });
    const indicatorColorHsl = computed(() => {
      const [h2, s, l] = hexToHsl(props.indicatorColor);
      const activeAlpha = active.value * 0.5 + 0.5;
      return `hsl(${h2} ${s}% ${l}% / ${activeAlpha})`;
    });
    const borderRadiusInPx = computed(() => `${props.borderRadius}px`);
    function hexToHsl(hex) {
      hex = hex.replace(/^#/, "");
      let r = parseInt(hex.substring(0, 2), 16) / 255;
      let g = parseInt(hex.substring(2, 4), 16) / 255;
      let b = parseInt(hex.substring(4, 6), 16) / 255;
      let max = Math.max(r, g, b), min = Math.min(r, g, b);
      let h2 = 0, s = 0, l = (max + min) / 2;
      if (max != min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h2 = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h2 = (b - r) / d + 2;
            break;
          case b:
            h2 = (r - g) / d + 4;
            break;
        }
        h2 /= 6;
      }
      return [h2 * 360, s * 100, l * 100];
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _cssVars = { style: {
        ":--v1380497c": borderRadiusInPx.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "slider-container relative mx-auto my-0 grid place-items-center overflow-hidden",
        style: sliderStyles.value
      }, _attrs, _cssVars))} data-v-75658b0d><input id="track"${ssrRenderAttr("value", value.value)} type="range" min="0" max="100" class="size-full touch-none opacity-0 hover:cursor-grab focus-visible:outline-offset-4 focus-visible:outline-transparent active:cursor-grabbing" data-v-75658b0d><div aria-hidden="true" class="${ssrRenderClass(unref(cn)(
        "slider-value-labels pointer-events-none absolute inset-x-0 top-0 z-[2] h-1/2 text-base"
      ))}" style="${ssrRenderStyle(sliderLabelStyles.value)}" data-v-75658b0d></div><div class="slider-track pointer-events-none absolute bottom-0 w-full" style="${ssrRenderStyle(sliderTrackStyles.value)}" data-v-75658b0d><div class="slider-indicator absolute top-1/2 z-[2] h-3/4 w-1 -translate-x-1/2 -translate-y-1/2 rounded-sm" data-v-75658b0d></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/balance-slider/BalanceSlider.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_14 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-75658b0d"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Skeleton",
  __ssrInlineRender: true,
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        "data-slot": "skeleton",
        class: unref(cn)("animate-pulse rounded-md bg-primary/10", props.class)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/skeleton/Skeleton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = computed(() => useColorMode().value == "dark");
    const rightColor = computed(() => isDark.value ? "#ff0000" : "#ff0000");
    const leftColor = computed(() => isDark.value ? "#00ff00" : "#00ff00");
    const indicatorColor = computed(() => isDark.value ? "#FFFFFF" : "#000000");
    const mode = useColorMode({
      emitAuto: true,
      modes: {
        contrast: "dark contrast",
        cafe: "cafe"
      }
    });
    const { state, next } = useCycleList(["dark", "light", "cafe", "contrast", "auto"], { initialValue: mode });
    watchEffect(() => mode.value = state.value);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SparklesText = _sfc_main$h;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_Carousel = _sfc_main$g;
      const _component_CarouselContent = _sfc_main$f;
      const _component_CarouselItem = _sfc_main$e;
      const _component_Button = _sfc_main$d;
      const _component_CarouselPrevious = _sfc_main$b;
      const _component_CarouselNext = _sfc_main$c;
      const _component_Pagination = _sfc_main$a;
      const _component_PaginationContent = _sfc_main$9;
      const _component_PaginationPrevious = _sfc_main$3;
      const _component_PaginationItem = _sfc_main$6;
      const _component_PaginationEllipsis = _sfc_main$8;
      const _component_PaginationNext = _sfc_main$4;
      const _component_BalanceSlider = __nuxt_component_14;
      const _component_Skeleton = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="fixed top-0 w-full bg-white dark:bg-black"><div class="flex gap-4 p-4"><div><div class="flex h-10 items-center justify-center">`);
      _push(ssrRenderComponent(_component_SparklesText, {
        class: "text-2xl font-bold",
        text: "Komprai",
        colors: { first: "#9E7AFF", second: "#FE8BBB" },
        "sparkles-count": 4
      }, null, _parent));
      _push(`</div></div><div></div><div><button>`);
      if (unref(state) === "dark") {
        _push(`<i i-carbon-moon inline-block align-middle class="align-middle"></i>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(state) === "light") {
        _push(`<i i-carbon-sun inline-block align-middle class="align-middle"></i>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(state) === "cafe") {
        _push(`<i i-carbon-cafe inline-block align-middle class="align-middle"></i>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(state) === "contrast") {
        _push(`<i i-carbon-contrast inline-block align-middle class="align-middle"></i>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(state) === "auto") {
        _push(`<i i-carbon-laptop inline-block align-middle class="align-middle"></i>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="ml-2 capitalize">${ssrInterpolate(unref(state))}</span></button></div></div></div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<div class="container max-w-7xl pt-18 pb-36 mx-auto"><div class="my-2 px-2 text-xl"><q>Quero um iphone 17 pro max</q></div>`);
      _push(ssrRenderComponent(_component_Carousel, { class: "relative px-2 w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CarouselContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<small class="text-muted-foreground"${_scopeId3}>Patrocinado · vendido por Magalu</small><img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt=""${_scopeId3}><div class="flex gap-2 my-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { class: "flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comprar`);
                            } else {
                              return [
                                createTextVNode("Comprar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("small", { class: "text-muted-foreground" }, "Patrocinado · vendido por Magalu"),
                          createVNode("img", {
                            src: "https://placehold.co/800",
                            class: "w-full p-1 border-1 rounded-sm",
                            alt: ""
                          }),
                          createVNode("div", { class: "flex gap-2 my-2" }, [
                            createVNode(_component_Button, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { class: "flex-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Comprar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<small class="text-muted-foreground"${_scopeId3}>vendido por Magalu</small><img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt=""${_scopeId3}><div class="flex gap-2 my-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { class: "flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comprar`);
                            } else {
                              return [
                                createTextVNode("Comprar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                          createVNode("img", {
                            src: "https://placehold.co/800",
                            class: "w-full p-1 border-1 rounded-sm",
                            alt: ""
                          }),
                          createVNode("div", { class: "flex gap-2 my-2" }, [
                            createVNode(_component_Button, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { class: "flex-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Comprar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<small class="text-muted-foreground"${_scopeId3}>vendido por Magalu</small><img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt=""${_scopeId3}><div class="flex gap-2 my-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { class: "flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comprar`);
                            } else {
                              return [
                                createTextVNode("Comprar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                          createVNode("img", {
                            src: "https://placehold.co/800",
                            class: "w-full p-1 border-1 rounded-sm",
                            alt: ""
                          }),
                          createVNode("div", { class: "flex gap-2 my-2" }, [
                            createVNode(_component_Button, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { class: "flex-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Comprar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<small class="text-muted-foreground"${_scopeId3}>vendido por Magalu</small><img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt=""${_scopeId3}><div class="flex gap-2 my-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { class: "flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comprar`);
                            } else {
                              return [
                                createTextVNode("Comprar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                          createVNode("img", {
                            src: "https://placehold.co/800",
                            class: "w-full p-1 border-1 rounded-sm",
                            alt: ""
                          }),
                          createVNode("div", { class: "flex gap-2 my-2" }, [
                            createVNode(_component_Button, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { class: "flex-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Comprar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<small class="text-muted-foreground"${_scopeId3}>vendido por Magalu</small><img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt=""${_scopeId3}><div class="flex gap-2 my-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { class: "flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comprar`);
                            } else {
                              return [
                                createTextVNode("Comprar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                          createVNode("img", {
                            src: "https://placehold.co/800",
                            class: "w-full p-1 border-1 rounded-sm",
                            alt: ""
                          }),
                          createVNode("div", { class: "flex gap-2 my-2" }, [
                            createVNode(_component_Button, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { class: "flex-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Comprar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<small class="text-muted-foreground"${_scopeId3}>vendido por Magalu</small><img src="https://placehold.co/800" class="w-full p-1 border-1 rounded-sm" alt=""${_scopeId3}><div class="flex gap-2 my-2"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_Button, { variant: "secondary" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { class: "flex-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`Comprar`);
                            } else {
                              return [
                                createTextVNode("Comprar")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`x`);
                            } else {
                              return [
                                createTextVNode("x")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                          createVNode("img", {
                            src: "https://placehold.co/800",
                            class: "w-full p-1 border-1 rounded-sm",
                            alt: ""
                          }),
                          createVNode("div", { class: "flex gap-2 my-2" }, [
                            createVNode(_component_Button, { variant: "secondary" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { class: "flex-1" }, {
                              default: withCtx(() => [
                                createTextVNode("Comprar")
                              ]),
                              _: 1
                            }),
                            createVNode(_component_Button, { variant: "destructive" }, {
                              default: withCtx(() => [
                                createTextVNode("x")
                              ]),
                              _: 1
                            })
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "text-muted-foreground" }, "Patrocinado · vendido por Magalu"),
                        createVNode("img", {
                          src: "https://placehold.co/800",
                          class: "w-full p-1 border-1 rounded-sm",
                          alt: ""
                        }),
                        createVNode("div", { class: "flex gap-2 my-2" }, [
                          createVNode(_component_Button, { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { class: "flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Comprar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                        createVNode("img", {
                          src: "https://placehold.co/800",
                          class: "w-full p-1 border-1 rounded-sm",
                          alt: ""
                        }),
                        createVNode("div", { class: "flex gap-2 my-2" }, [
                          createVNode(_component_Button, { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { class: "flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Comprar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                        createVNode("img", {
                          src: "https://placehold.co/800",
                          class: "w-full p-1 border-1 rounded-sm",
                          alt: ""
                        }),
                        createVNode("div", { class: "flex gap-2 my-2" }, [
                          createVNode(_component_Button, { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { class: "flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Comprar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                        createVNode("img", {
                          src: "https://placehold.co/800",
                          class: "w-full p-1 border-1 rounded-sm",
                          alt: ""
                        }),
                        createVNode("div", { class: "flex gap-2 my-2" }, [
                          createVNode(_component_Button, { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { class: "flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Comprar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                        createVNode("img", {
                          src: "https://placehold.co/800",
                          class: "w-full p-1 border-1 rounded-sm",
                          alt: ""
                        }),
                        createVNode("div", { class: "flex gap-2 my-2" }, [
                          createVNode(_component_Button, { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { class: "flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Comprar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                      default: withCtx(() => [
                        createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                        createVNode("img", {
                          src: "https://placehold.co/800",
                          class: "w-full p-1 border-1 rounded-sm",
                          alt: ""
                        }),
                        createVNode("div", { class: "flex gap-2 my-2" }, [
                          createVNode(_component_Button, { variant: "secondary" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { class: "flex-1" }, {
                            default: withCtx(() => [
                              createTextVNode("Comprar")
                            ]),
                            _: 1
                          }),
                          createVNode(_component_Button, { variant: "destructive" }, {
                            default: withCtx(() => [
                              createTextVNode("x")
                            ]),
                            _: 1
                          })
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselPrevious, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CarouselNext, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CarouselContent, null, {
                default: withCtx(() => [
                  createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx(() => [
                      createVNode("small", { class: "text-muted-foreground" }, "Patrocinado · vendido por Magalu"),
                      createVNode("img", {
                        src: "https://placehold.co/800",
                        class: "w-full p-1 border-1 rounded-sm",
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-2 my-2" }, [
                        createVNode(_component_Button, { variant: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { class: "flex-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Comprar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "destructive" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx(() => [
                      createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                      createVNode("img", {
                        src: "https://placehold.co/800",
                        class: "w-full p-1 border-1 rounded-sm",
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-2 my-2" }, [
                        createVNode(_component_Button, { variant: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { class: "flex-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Comprar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "destructive" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx(() => [
                      createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                      createVNode("img", {
                        src: "https://placehold.co/800",
                        class: "w-full p-1 border-1 rounded-sm",
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-2 my-2" }, [
                        createVNode(_component_Button, { variant: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { class: "flex-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Comprar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "destructive" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx(() => [
                      createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                      createVNode("img", {
                        src: "https://placehold.co/800",
                        class: "w-full p-1 border-1 rounded-sm",
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-2 my-2" }, [
                        createVNode(_component_Button, { variant: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { class: "flex-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Comprar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "destructive" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx(() => [
                      createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                      createVNode("img", {
                        src: "https://placehold.co/800",
                        class: "w-full p-1 border-1 rounded-sm",
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-2 my-2" }, [
                        createVNode(_component_Button, { variant: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { class: "flex-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Comprar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "destructive" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_CarouselItem, { class: "basis-1/2 lg:basis-1/4" }, {
                    default: withCtx(() => [
                      createVNode("small", { class: "text-muted-foreground" }, "vendido por Magalu"),
                      createVNode("img", {
                        src: "https://placehold.co/800",
                        class: "w-full p-1 border-1 rounded-sm",
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-2 my-2" }, [
                        createVNode(_component_Button, { variant: "secondary" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { class: "flex-1" }, {
                          default: withCtx(() => [
                            createTextVNode("Comprar")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Button, { variant: "destructive" }, {
                          default: withCtx(() => [
                            createTextVNode("x")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CarouselPrevious),
              createVNode(_component_CarouselNext)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-2 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi maxime libero impedit porro? Veritatis numquam pariatur amet inventore facilis repellat praesentium quidem iusto suscipit, quibusdam, explicabo consectetur. Sed, labore.</div><div class="my-2 px-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et commodi maxime libero impedit porro? Veritatis numquam pariatur amet inventore facilis repellat praesentium quidem iusto suscipit, quibusdam, explicabo consectetur. Sed, labore.</div>`);
      _push(ssrRenderComponent(_component_Pagination, {
        class: "",
        "items-per-page": 10,
        total: 30,
        "default-page": 2
      }, {
        default: withCtx(({ page }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_PaginationContent, null, {
              default: withCtx(({ items }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_PaginationPrevious, null, null, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(items, (item, index) => {
                    _push3(`<!--[-->`);
                    if (item.type === "page") {
                      _push3(ssrRenderComponent(_component_PaginationItem, {
                        value: item.value,
                        "is-active": item.value === page
                      }, {
                        default: withCtx((_, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(item.value)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(item.value), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  });
                  _push3(`<!--]-->`);
                  _push3(ssrRenderComponent(_component_PaginationEllipsis, { index: 4 }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_PaginationNext, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_PaginationPrevious),
                    (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                      return openBlock(), createBlock(Fragment, { key: index }, [
                        item.type === "page" ? (openBlock(), createBlock(_component_PaginationItem, {
                          key: 0,
                          value: item.value,
                          "is-active": item.value === page
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.value), 1)
                          ]),
                          _: 2
                        }, 1032, ["value", "is-active"])) : createCommentVNode("", true)
                      ], 64);
                    }), 128)),
                    createVNode(_component_PaginationEllipsis, { index: 4 }),
                    createVNode(_component_PaginationNext)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_PaginationContent, null, {
                default: withCtx(({ items }) => [
                  createVNode(_component_PaginationPrevious),
                  (openBlock(true), createBlock(Fragment, null, renderList(items, (item, index) => {
                    return openBlock(), createBlock(Fragment, { key: index }, [
                      item.type === "page" ? (openBlock(), createBlock(_component_PaginationItem, {
                        key: 0,
                        value: item.value,
                        "is-active": item.value === page
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.value), 1)
                        ]),
                        _: 2
                      }, 1032, ["value", "is-active"])) : createCommentVNode("", true)
                    ], 64);
                  }), 128)),
                  createVNode(_component_PaginationEllipsis, { index: 4 }),
                  createVNode(_component_PaginationNext)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="my-2 px-2 text-xl"><q>Quero um iphone 17 pro max</q></div><div class="w-full">`);
      _push(ssrRenderComponent(_component_BalanceSlider, {
        "right-color": rightColor.value,
        "left-color": leftColor.value,
        "left-content": "BOM",
        "right-content": "RUIM",
        "indicator-color": indicatorColor.value
      }, null, _parent));
      _push(`</div><div class="my-2 px-2 text-xl"><q>Quero um iphone 17 pro max</q></div><div class="flex gap-4 px-2 mt-8"><div class="h-[100%] w-[100%]">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[50%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[350px] w-[100%]" }, null, _parent));
      _push(`<div class="flex gap-2 mt-2">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] flex-1" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(`</div></div><div class="h-[100%] w-[100%]">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[50%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[350px] w-[100%]" }, null, _parent));
      _push(`<div class="flex gap-2 mt-2">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] flex-1" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(`</div></div><div class="h-[100%] w-[100%]">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[50%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[350px] w-[100%]" }, null, _parent));
      _push(`<div class="flex gap-2 mt-2">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] flex-1" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(`</div></div><div class="h-[100%] w-[100%]">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[50%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[350px] w-[100%]" }, null, _parent));
      _push(`<div class="flex gap-2 mt-2">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] flex-1" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[35px] w-[35px]" }, null, _parent));
      _push(`</div></div></div><div class="my-6">`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[50%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[70%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[80%] mb-2" }, null, _parent));
      _push(`<br>`);
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[90%] mb-2" }, null, _parent));
      _push(ssrRenderComponent(_component_Skeleton, { class: "h-[10px] w-[70%] mb-2" }, null, _parent));
      _push(`</div><div class="my-2 px-2 text-xl"><q>Quero um iphone 17 pro max</q></div><div class="w-full">`);
      _push(ssrRenderComponent(_component_BalanceSlider, {
        "right-color": rightColor.value,
        "left-color": leftColor.value,
        "left-content": "BOM",
        "right-content": "RUIM",
        "indicator-color": indicatorColor.value
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="fixed bottom-0 w-full flex justify-center p-2 mb-4 z-[434233]">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="mt-14 mb-24 text-center"><small class="text-muted-foreground">© Copyright · Komprai, LLC.</small></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Be-D4ARN.mjs.map
