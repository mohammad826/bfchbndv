declare module 'lucide-react' {
  import { ComponentType, SVGProps } from 'react';
  interface IconProps extends SVGProps<SVGSVGElement> {
    size?: number | string;
    absoluteStrokeWidth?: boolean;
  }
  type Icon = ComponentType<IconProps>;
  export const ArrowLeft: Icon;
  export const Play: Icon;
  export const Gift: Icon;
  export const Star: Icon;
  export const Wallet: Icon;
  export const Shield: Icon;
  export const Package: Icon;
  export const Copy: Icon;
  export const Users: Icon;
  export const TrendingUp: Icon;
  export const DollarSign: Icon;
  export const Coins: Icon;
  export const Clock: Icon;
  export const Check: Icon;
  export const X: Icon;
  export const RefreshCw: Icon;
  export const ExternalLink: Icon;
  export const Zap: Icon;
  export const MoreVertical: Icon;
  export const Search: Icon;
  export const User: Icon;
  export const Settings: Icon;
  export const LogOut: Icon;
  export const ChevronRight: Icon;
  export const Send: Icon;
  export const AlertCircle: Icon;
  export const Loader: Icon;
  export const Home: Icon;
  export const BarChart3: Icon;
  export const CreditCard: Icon;
  export const History: Icon;
  export const GiftIcon: Icon;
}