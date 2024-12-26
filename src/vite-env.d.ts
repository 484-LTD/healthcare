/// <reference types="vite/client" />

declare module 'react-tradingview-widget' {
  interface TradingViewWidgetProps {
    symbol?: string;
    width?: string | number;
    height?: string | number;
    autosize?: boolean;
    interval?: string;
    timezone?: string;
    theme?: 'light' | 'dark';
    style?: string;
    locale?: string;
    toolbar_bg?: string;
    enable_publishing?: boolean;
    allow_symbol_change?: boolean;
    container_id?: string;
    widgetType?: string;
    hide_top_toolbar?: boolean;
    hide_legend?: boolean;
    save_image?: boolean;
    studies?: string[];
    show_popup_button?: boolean;
    popup_width?: string;
    popup_height?: string;
    details?: boolean;
    hotlist?: boolean;
    calendar?: boolean;
    news?: string[];
    studies_overrides?: object;
    overrides?: object;
    disabled_features?: string[];
    enabled_features?: string[];
    withdateranges?: boolean;
    hide_side_toolbar?: boolean;
    range?: string;
    allow_symbol_select?: boolean;
    hide_volume?: boolean;
    scalePosition?: string;
    hideideas?: boolean;
    watchlist?: string[];
    editablewatchlist?: boolean;
    backgroundColor?: string;
    showFloatingTooltip?: boolean;
    valuesTracking?: string;
    copyrightStyles?: object;
  }

  export default class TradingViewWidget extends React.Component<TradingViewWidgetProps> {}
}