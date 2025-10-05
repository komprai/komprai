
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)

interface _GlobalComponents {
      'AnimatedTestimonials': typeof import("../../app/components/ui/animated-testimonials/index")['AnimatedTestimonials']
    'BalanceSlider': typeof import("../../app/components/ui/balance-slider/index")['BalanceSlider']
    'BorderBeam': typeof import("../../app/components/ui/border-beam/index")['BorderBeam']
    'Button': typeof import("../../app/components/ui/button/index")['Button']
    'Carousel': typeof import("../../app/components/ui/carousel/index")['Carousel']
    'CarouselContent': typeof import("../../app/components/ui/carousel/index")['CarouselContent']
    'CarouselItem': typeof import("../../app/components/ui/carousel/index")['CarouselItem']
    'CarouselNext': typeof import("../../app/components/ui/carousel/index")['CarouselNext']
    'CarouselPrevious': typeof import("../../app/components/ui/carousel/index")['CarouselPrevious']
    'CarouselInterface': typeof import("../../app/components/ui/carousel/interface")['default']
    'CarouselUseCarousel': typeof import("../../app/components/ui/carousel/useCarousel")['default']
    'DropdownMenu': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuCheckboxItem': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuContent': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuItem': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuLabel': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuRadioGroup': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuRadioItem': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuSeparator': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuShortcut': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSub': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubContent': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'DropdownMenuSubTrigger': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuTrigger': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'ExpandableGallery': typeof import("../../app/components/ui/expandable-gallery/index")['ExpandableGallery']
    'FluidCursor': typeof import("../../app/components/ui/fluid-cursor/index")['FluidCursor']
    'GlowBorder': typeof import("../../app/components/ui/glow-border/index")['GlowBorder']
    'GradientButton': typeof import("../../app/components/ui/gradient-button/index")['GradientButton']
    'HaloSearch': typeof import("../../app/components/ui/halo-search/index")['HaloSearch']
    'MorphingText': typeof import("../../app/components/ui/morphing-text/index")['MorphingText']
    'NavigationMenu': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenu']
    'NavigationMenuContent': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuContent']
    'NavigationMenuIndicator': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']
    'NavigationMenuItem': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuItem']
    'NavigationMenuLink': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuLink']
    'NavigationMenuList': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuList']
    'NavigationMenuTrigger': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']
    'NavigationMenuViewport': typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuViewport']
    'NeonBorder': typeof import("../../app/components/ui/neon-border/index")['NeonBorder']
    'Pagination': typeof import("../../app/components/ui/pagination/index")['Pagination']
    'PaginationContent': typeof import("../../app/components/ui/pagination/index")['PaginationContent']
    'PaginationEllipsis': typeof import("../../app/components/ui/pagination/index")['PaginationEllipsis']
    'PaginationFirst': typeof import("../../app/components/ui/pagination/index")['PaginationFirst']
    'PaginationItem': typeof import("../../app/components/ui/pagination/index")['PaginationItem']
    'PaginationLast': typeof import("../../app/components/ui/pagination/index")['PaginationLast']
    'PaginationNext': typeof import("../../app/components/ui/pagination/index")['PaginationNext']
    'PaginationPrevious': typeof import("../../app/components/ui/pagination/index")['PaginationPrevious']
    'Separator': typeof import("../../app/components/ui/separator/index")['Separator']
    'Skeleton': typeof import("../../app/components/ui/skeleton/index")['Skeleton']
    'SparklesText': typeof import("../../app/components/ui/sparkles-text/index")['SparklesText']
    'VanishingInput': typeof import("../../app/components/ui/vanishing-input/index")['VanishingInput']
    'LayoutHeader': typeof import("../../app/components/layout/header.vue")['default']
    'Search': typeof import("../../app/components/search/index.vue")['default']
    'NuxtWelcome': typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
    'ClientOnly': typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtTime': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
    'NuxtPicture': typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
    'CarouselApi': typeof import("../../app/components/ui/carousel/index")['CarouselApi']
    'DropdownMenuPortal': typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'Icon': typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
      'LazyAnimatedTestimonials': LazyComponent<typeof import("../../app/components/ui/animated-testimonials/index")['AnimatedTestimonials']>
    'LazyBalanceSlider': LazyComponent<typeof import("../../app/components/ui/balance-slider/index")['BalanceSlider']>
    'LazyBorderBeam': LazyComponent<typeof import("../../app/components/ui/border-beam/index")['BorderBeam']>
    'LazyButton': LazyComponent<typeof import("../../app/components/ui/button/index")['Button']>
    'LazyCarousel': LazyComponent<typeof import("../../app/components/ui/carousel/index")['Carousel']>
    'LazyCarouselContent': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselContent']>
    'LazyCarouselItem': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselItem']>
    'LazyCarouselNext': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselNext']>
    'LazyCarouselPrevious': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselPrevious']>
    'LazyCarouselInterface': LazyComponent<typeof import("../../app/components/ui/carousel/interface")['default']>
    'LazyCarouselUseCarousel': LazyComponent<typeof import("../../app/components/ui/carousel/useCarousel")['default']>
    'LazyDropdownMenu': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyExpandableGallery': LazyComponent<typeof import("../../app/components/ui/expandable-gallery/index")['ExpandableGallery']>
    'LazyFluidCursor': LazyComponent<typeof import("../../app/components/ui/fluid-cursor/index")['FluidCursor']>
    'LazyGlowBorder': LazyComponent<typeof import("../../app/components/ui/glow-border/index")['GlowBorder']>
    'LazyGradientButton': LazyComponent<typeof import("../../app/components/ui/gradient-button/index")['GradientButton']>
    'LazyHaloSearch': LazyComponent<typeof import("../../app/components/ui/halo-search/index")['HaloSearch']>
    'LazyMorphingText': LazyComponent<typeof import("../../app/components/ui/morphing-text/index")['MorphingText']>
    'LazyNavigationMenu': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenu']>
    'LazyNavigationMenuContent': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuContent']>
    'LazyNavigationMenuIndicator': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']>
    'LazyNavigationMenuItem': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuItem']>
    'LazyNavigationMenuLink': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuLink']>
    'LazyNavigationMenuList': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuList']>
    'LazyNavigationMenuTrigger': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
    'LazyNavigationMenuViewport': LazyComponent<typeof import("../../app/components/ui/navigation-menu/index")['NavigationMenuViewport']>
    'LazyNeonBorder': LazyComponent<typeof import("../../app/components/ui/neon-border/index")['NeonBorder']>
    'LazyPagination': LazyComponent<typeof import("../../app/components/ui/pagination/index")['Pagination']>
    'LazyPaginationContent': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationContent']>
    'LazyPaginationEllipsis': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationEllipsis']>
    'LazyPaginationFirst': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationFirst']>
    'LazyPaginationItem': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationItem']>
    'LazyPaginationLast': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationLast']>
    'LazyPaginationNext': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationNext']>
    'LazyPaginationPrevious': LazyComponent<typeof import("../../app/components/ui/pagination/index")['PaginationPrevious']>
    'LazySeparator': LazyComponent<typeof import("../../app/components/ui/separator/index")['Separator']>
    'LazySkeleton': LazyComponent<typeof import("../../app/components/ui/skeleton/index")['Skeleton']>
    'LazySparklesText': LazyComponent<typeof import("../../app/components/ui/sparkles-text/index")['SparklesText']>
    'LazyVanishingInput': LazyComponent<typeof import("../../app/components/ui/vanishing-input/index")['VanishingInput']>
    'LazyLayoutHeader': LazyComponent<typeof import("../../app/components/layout/header.vue")['default']>
    'LazySearch': LazyComponent<typeof import("../../app/components/search/index.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtTime': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
    'LazyNuxtPicture': LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
    'LazyCarouselApi': LazyComponent<typeof import("../../app/components/ui/carousel/index")['CarouselApi']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazyIcon': LazyComponent<typeof import("../../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
