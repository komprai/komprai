
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


export const AnimatedTestimonials: typeof import("../app/components/ui/animated-testimonials/index")['AnimatedTestimonials']
export const BalanceSlider: typeof import("../app/components/ui/balance-slider/index")['BalanceSlider']
export const BorderBeam: typeof import("../app/components/ui/border-beam/index")['BorderBeam']
export const Button: typeof import("../app/components/ui/button/index")['Button']
export const Carousel: typeof import("../app/components/ui/carousel/index")['Carousel']
export const CarouselContent: typeof import("../app/components/ui/carousel/index")['CarouselContent']
export const CarouselItem: typeof import("../app/components/ui/carousel/index")['CarouselItem']
export const CarouselNext: typeof import("../app/components/ui/carousel/index")['CarouselNext']
export const CarouselPrevious: typeof import("../app/components/ui/carousel/index")['CarouselPrevious']
export const CarouselInterface: typeof import("../app/components/ui/carousel/interface")['default']
export const CarouselUseCarousel: typeof import("../app/components/ui/carousel/useCarousel")['default']
export const DropdownMenu: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuCheckboxItem: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuContent: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuItem: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuLabel: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuRadioGroup: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuRadioItem: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuSeparator: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuShortcut: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSub: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubContent: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const DropdownMenuSubTrigger: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuTrigger: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const ExpandableGallery: typeof import("../app/components/ui/expandable-gallery/index")['ExpandableGallery']
export const FluidCursor: typeof import("../app/components/ui/fluid-cursor/index")['FluidCursor']
export const GlowBorder: typeof import("../app/components/ui/glow-border/index")['GlowBorder']
export const GradientButton: typeof import("../app/components/ui/gradient-button/index")['GradientButton']
export const HaloSearch: typeof import("../app/components/ui/halo-search/index")['HaloSearch']
export const MorphingText: typeof import("../app/components/ui/morphing-text/index")['MorphingText']
export const NavigationMenu: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenu']
export const NavigationMenuContent: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuContent']
export const NavigationMenuIndicator: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']
export const NavigationMenuItem: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuItem']
export const NavigationMenuLink: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuLink']
export const NavigationMenuList: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuList']
export const NavigationMenuTrigger: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']
export const NavigationMenuViewport: typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuViewport']
export const NeonBorder: typeof import("../app/components/ui/neon-border/index")['NeonBorder']
export const Pagination: typeof import("../app/components/ui/pagination/index")['Pagination']
export const PaginationContent: typeof import("../app/components/ui/pagination/index")['PaginationContent']
export const PaginationEllipsis: typeof import("../app/components/ui/pagination/index")['PaginationEllipsis']
export const PaginationFirst: typeof import("../app/components/ui/pagination/index")['PaginationFirst']
export const PaginationItem: typeof import("../app/components/ui/pagination/index")['PaginationItem']
export const PaginationLast: typeof import("../app/components/ui/pagination/index")['PaginationLast']
export const PaginationNext: typeof import("../app/components/ui/pagination/index")['PaginationNext']
export const PaginationPrevious: typeof import("../app/components/ui/pagination/index")['PaginationPrevious']
export const Separator: typeof import("../app/components/ui/separator/index")['Separator']
export const Skeleton: typeof import("../app/components/ui/skeleton/index")['Skeleton']
export const SparklesText: typeof import("../app/components/ui/sparkles-text/index")['SparklesText']
export const VanishingInput: typeof import("../app/components/ui/vanishing-input/index")['VanishingInput']
export const LayoutHeader: typeof import("../app/components/layout/header.vue")['default']
export const Search: typeof import("../app/components/search/index.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const CarouselApi: typeof import("../app/components/ui/carousel/index")['CarouselApi']
export const DropdownMenuPortal: typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyAnimatedTestimonials: LazyComponent<typeof import("../app/components/ui/animated-testimonials/index")['AnimatedTestimonials']>
export const LazyBalanceSlider: LazyComponent<typeof import("../app/components/ui/balance-slider/index")['BalanceSlider']>
export const LazyBorderBeam: LazyComponent<typeof import("../app/components/ui/border-beam/index")['BorderBeam']>
export const LazyButton: LazyComponent<typeof import("../app/components/ui/button/index")['Button']>
export const LazyCarousel: LazyComponent<typeof import("../app/components/ui/carousel/index")['Carousel']>
export const LazyCarouselContent: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselContent']>
export const LazyCarouselItem: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselItem']>
export const LazyCarouselNext: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselNext']>
export const LazyCarouselPrevious: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselPrevious']>
export const LazyCarouselInterface: LazyComponent<typeof import("../app/components/ui/carousel/interface")['default']>
export const LazyCarouselUseCarousel: LazyComponent<typeof import("../app/components/ui/carousel/useCarousel")['default']>
export const LazyDropdownMenu: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyExpandableGallery: LazyComponent<typeof import("../app/components/ui/expandable-gallery/index")['ExpandableGallery']>
export const LazyFluidCursor: LazyComponent<typeof import("../app/components/ui/fluid-cursor/index")['FluidCursor']>
export const LazyGlowBorder: LazyComponent<typeof import("../app/components/ui/glow-border/index")['GlowBorder']>
export const LazyGradientButton: LazyComponent<typeof import("../app/components/ui/gradient-button/index")['GradientButton']>
export const LazyHaloSearch: LazyComponent<typeof import("../app/components/ui/halo-search/index")['HaloSearch']>
export const LazyMorphingText: LazyComponent<typeof import("../app/components/ui/morphing-text/index")['MorphingText']>
export const LazyNavigationMenu: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenu']>
export const LazyNavigationMenuContent: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuContent']>
export const LazyNavigationMenuIndicator: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuIndicator']>
export const LazyNavigationMenuItem: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuItem']>
export const LazyNavigationMenuLink: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuLink']>
export const LazyNavigationMenuList: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuList']>
export const LazyNavigationMenuTrigger: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuTrigger']>
export const LazyNavigationMenuViewport: LazyComponent<typeof import("../app/components/ui/navigation-menu/index")['NavigationMenuViewport']>
export const LazyNeonBorder: LazyComponent<typeof import("../app/components/ui/neon-border/index")['NeonBorder']>
export const LazyPagination: LazyComponent<typeof import("../app/components/ui/pagination/index")['Pagination']>
export const LazyPaginationContent: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationContent']>
export const LazyPaginationEllipsis: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationEllipsis']>
export const LazyPaginationFirst: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationFirst']>
export const LazyPaginationItem: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationItem']>
export const LazyPaginationLast: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationLast']>
export const LazyPaginationNext: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationNext']>
export const LazyPaginationPrevious: LazyComponent<typeof import("../app/components/ui/pagination/index")['PaginationPrevious']>
export const LazySeparator: LazyComponent<typeof import("../app/components/ui/separator/index")['Separator']>
export const LazySkeleton: LazyComponent<typeof import("../app/components/ui/skeleton/index")['Skeleton']>
export const LazySparklesText: LazyComponent<typeof import("../app/components/ui/sparkles-text/index")['SparklesText']>
export const LazyVanishingInput: LazyComponent<typeof import("../app/components/ui/vanishing-input/index")['VanishingInput']>
export const LazyLayoutHeader: LazyComponent<typeof import("../app/components/layout/header.vue")['default']>
export const LazySearch: LazyComponent<typeof import("../app/components/search/index.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyCarouselApi: LazyComponent<typeof import("../app/components/ui/carousel/index")['CarouselApi']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../app/components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
