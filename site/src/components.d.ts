/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarkdownContent, MarkdownHeading, SiteStructureItem, } from "./global/definitions";
import { JSX, } from "@stencil/core";
export namespace Components {
    interface AnchorLink {
        "to": string;
    }
    interface AppBurger {
    }
    interface AppIcon {
        "name": string;
    }
    interface AppMarked {
        "fetchPath"?: string;
        "renderer"?: (doc: MarkdownContent) => JSX.Element;
    }
    interface AvcCodeType {
        "typeId": string;
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorSite {
        "isLandingPage": boolean;
    }
    interface ContributorList {
        "contributors": string[];
        "link": (contributor: string) => string;
    }
    interface DemosPage {
    }
    interface DocSnippet {
    }
    interface DocumentComponent {
        "page": string;
        "pages": string[];
    }
    interface InPageNavigation {
        "currentPageUrl": string;
        "pageLinks": MarkdownHeading[];
        "srcUrl": string;
    }
    interface InternalAd {
    }
    interface LandingPage {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "index": boolean;
        "name": string;
    }
    interface PluginPlatforms {
        "platforms": string;
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "selectedParent": SiteStructureItem;
        "siteStructureList": SiteStructureItem[];
    }
}
declare global {
    interface HTMLAnchorLinkElement extends Components.AnchorLink, HTMLStencilElement {
    }
    var HTMLAnchorLinkElement: {
        prototype: HTMLAnchorLinkElement;
        new (): HTMLAnchorLinkElement;
    };
    interface HTMLAppBurgerElement extends Components.AppBurger, HTMLStencilElement {
    }
    var HTMLAppBurgerElement: {
        prototype: HTMLAppBurgerElement;
        new (): HTMLAppBurgerElement;
    };
    interface HTMLAppIconElement extends Components.AppIcon, HTMLStencilElement {
    }
    var HTMLAppIconElement: {
        prototype: HTMLAppIconElement;
        new (): HTMLAppIconElement;
    };
    interface HTMLAppMarkedElement extends Components.AppMarked, HTMLStencilElement {
    }
    var HTMLAppMarkedElement: {
        prototype: HTMLAppMarkedElement;
        new (): HTMLAppMarkedElement;
    };
    interface HTMLAvcCodeTypeElement extends Components.AvcCodeType, HTMLStencilElement {
    }
    var HTMLAvcCodeTypeElement: {
        prototype: HTMLAvcCodeTypeElement;
        new (): HTMLAvcCodeTypeElement;
    };
    interface HTMLCapacitorEnterpriseElement extends Components.CapacitorEnterprise, HTMLStencilElement {
    }
    var HTMLCapacitorEnterpriseElement: {
        prototype: HTMLCapacitorEnterpriseElement;
        new (): HTMLCapacitorEnterpriseElement;
    };
    interface HTMLCapacitorSiteElement extends Components.CapacitorSite, HTMLStencilElement {
    }
    var HTMLCapacitorSiteElement: {
        prototype: HTMLCapacitorSiteElement;
        new (): HTMLCapacitorSiteElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLDemosPageElement extends Components.DemosPage, HTMLStencilElement {
    }
    var HTMLDemosPageElement: {
        prototype: HTMLDemosPageElement;
        new (): HTMLDemosPageElement;
    };
    interface HTMLDocSnippetElement extends Components.DocSnippet, HTMLStencilElement {
    }
    var HTMLDocSnippetElement: {
        prototype: HTMLDocSnippetElement;
        new (): HTMLDocSnippetElement;
    };
    interface HTMLDocumentComponentElement extends Components.DocumentComponent, HTMLStencilElement {
    }
    var HTMLDocumentComponentElement: {
        prototype: HTMLDocumentComponentElement;
        new (): HTMLDocumentComponentElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLInternalAdElement extends Components.InternalAd, HTMLStencilElement {
    }
    var HTMLInternalAdElement: {
        prototype: HTMLInternalAdElement;
        new (): HTMLInternalAdElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLPluginApiElement extends Components.PluginApi, HTMLStencilElement {
    }
    var HTMLPluginApiElement: {
        prototype: HTMLPluginApiElement;
        new (): HTMLPluginApiElement;
    };
    interface HTMLPluginPlatformsElement extends Components.PluginPlatforms, HTMLStencilElement {
    }
    var HTMLPluginPlatformsElement: {
        prototype: HTMLPluginPlatformsElement;
        new (): HTMLPluginPlatformsElement;
    };
    interface HTMLSiteHeaderElement extends Components.SiteHeader, HTMLStencilElement {
    }
    var HTMLSiteHeaderElement: {
        prototype: HTMLSiteHeaderElement;
        new (): HTMLSiteHeaderElement;
    };
    interface HTMLSiteMenuElement extends Components.SiteMenu, HTMLStencilElement {
    }
    var HTMLSiteMenuElement: {
        prototype: HTMLSiteMenuElement;
        new (): HTMLSiteMenuElement;
    };
    interface HTMLElementTagNameMap {
        "anchor-link": HTMLAnchorLinkElement;
        "app-burger": HTMLAppBurgerElement;
        "app-icon": HTMLAppIconElement;
        "app-marked": HTMLAppMarkedElement;
        "avc-code-type": HTMLAvcCodeTypeElement;
        "capacitor-enterprise": HTMLCapacitorEnterpriseElement;
        "capacitor-site": HTMLCapacitorSiteElement;
        "contributor-list": HTMLContributorListElement;
        "demos-page": HTMLDemosPageElement;
        "doc-snippet": HTMLDocSnippetElement;
        "document-component": HTMLDocumentComponentElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "internal-ad": HTMLInternalAdElement;
        "landing-page": HTMLLandingPageElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "plugin-api": HTMLPluginApiElement;
        "plugin-platforms": HTMLPluginPlatformsElement;
        "site-header": HTMLSiteHeaderElement;
        "site-menu": HTMLSiteMenuElement;
    }
}
declare namespace LocalJSX {
    interface AnchorLink {
        "to"?: string;
    }
    interface AppBurger {
        "onBurgerClick"?: (event: CustomEvent<any>) => void;
    }
    interface AppIcon {
        "name"?: string;
    }
    interface AppMarked {
        "fetchPath"?: string;
        "renderer"?: (doc: MarkdownContent) => JSX.Element;
    }
    interface AvcCodeType {
        "typeId"?: string;
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorSite {
        "isLandingPage"?: boolean;
    }
    interface ContributorList {
        "contributors"?: string[];
        "link"?: (contributor: string) => string;
    }
    interface DemosPage {
    }
    interface DocSnippet {
    }
    interface DocumentComponent {
        "page"?: string;
        "pages"?: string[];
    }
    interface InPageNavigation {
        "currentPageUrl"?: string;
        "pageLinks"?: MarkdownHeading[];
        "srcUrl"?: string;
    }
    interface InternalAd {
    }
    interface LandingPage {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "index"?: boolean;
        "name"?: string;
    }
    interface PluginPlatforms {
        "platforms"?: string;
    }
    interface SiteHeader {
    }
    interface SiteMenu {
        "onLeftSidebarClick"?: (event: CustomEvent<any>) => void;
        "selectedParent"?: SiteStructureItem;
        "siteStructureList"?: SiteStructureItem[];
    }
    interface IntrinsicElements {
        "anchor-link": AnchorLink;
        "app-burger": AppBurger;
        "app-icon": AppIcon;
        "app-marked": AppMarked;
        "avc-code-type": AvcCodeType;
        "capacitor-enterprise": CapacitorEnterprise;
        "capacitor-site": CapacitorSite;
        "contributor-list": ContributorList;
        "demos-page": DemosPage;
        "doc-snippet": DocSnippet;
        "document-component": DocumentComponent;
        "in-page-navigation": InPageNavigation;
        "internal-ad": InternalAd;
        "landing-page": LandingPage;
        "lower-content-nav": LowerContentNav;
        "newsletter-signup": NewsletterSignup;
        "plugin-api": PluginApi;
        "plugin-platforms": PluginPlatforms;
        "site-header": SiteHeader;
        "site-menu": SiteMenu;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anchor-link": LocalJSX.AnchorLink & JSXBase.HTMLAttributes<HTMLAnchorLinkElement>;
            "app-burger": LocalJSX.AppBurger & JSXBase.HTMLAttributes<HTMLAppBurgerElement>;
            "app-icon": LocalJSX.AppIcon & JSXBase.HTMLAttributes<HTMLAppIconElement>;
            "app-marked": LocalJSX.AppMarked & JSXBase.HTMLAttributes<HTMLAppMarkedElement>;
            "avc-code-type": LocalJSX.AvcCodeType & JSXBase.HTMLAttributes<HTMLAvcCodeTypeElement>;
            "capacitor-enterprise": LocalJSX.CapacitorEnterprise & JSXBase.HTMLAttributes<HTMLCapacitorEnterpriseElement>;
            "capacitor-site": LocalJSX.CapacitorSite & JSXBase.HTMLAttributes<HTMLCapacitorSiteElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "demos-page": LocalJSX.DemosPage & JSXBase.HTMLAttributes<HTMLDemosPageElement>;
            "doc-snippet": LocalJSX.DocSnippet & JSXBase.HTMLAttributes<HTMLDocSnippetElement>;
            "document-component": LocalJSX.DocumentComponent & JSXBase.HTMLAttributes<HTMLDocumentComponentElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "internal-ad": LocalJSX.InternalAd & JSXBase.HTMLAttributes<HTMLInternalAdElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "plugin-api": LocalJSX.PluginApi & JSXBase.HTMLAttributes<HTMLPluginApiElement>;
            "plugin-platforms": LocalJSX.PluginPlatforms & JSXBase.HTMLAttributes<HTMLPluginPlatformsElement>;
            "site-header": LocalJSX.SiteHeader & JSXBase.HTMLAttributes<HTMLSiteHeaderElement>;
            "site-menu": LocalJSX.SiteMenu & JSXBase.HTMLAttributes<HTMLSiteMenuElement>;
        }
    }
}
