import React from "react";

// Icons
import { ReactComponent as ChartIcon } from "../../lib/icons/chart.svg";
import { ReactComponent as ExchangeIcon } from "../../lib/icons/exchange.svg";
import { ReactComponent as PaymentLinkIcon } from "../../lib/icons/payment-link.svg";
import { ReactComponent as PaymentsIcon } from "../../lib/icons/payments.svg";
import { ReactComponent as PieChartIcon } from "../../lib/icons/pie-chart.svg";
import { ReactComponent as RadarIcon } from "../../lib/icons/radar.svg";
import { ReactComponent as ShoppingCartIcon } from "../../lib/icons/shopping-cart.svg";
import { ReactComponent as TransactionsIcon } from "../../lib/icons/transactions.svg";
import { ReactComponent as WalletIcon } from "../../lib/icons/wallet.svg";
import { ReactComponent as DropDownIcon } from "../../lib/icons/drop-down.svg";
import { ReactComponent as DropUpIcon } from "../../lib/icons/drop-up.svg";
import { ReactComponent as ArrowDownIcon } from "../../lib/icons/arrow-down.svg";
import { ReactComponent as ArrowLeftIcon } from "../../lib/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "../../lib/icons/arrow-right.svg";
import { ReactComponent as SearchIcon } from "../../lib/icons/search.svg";
import { ReactComponent as FilterIcon } from "../../lib/icons/filter.svg";

const iconMap = {
    chart: ChartIcon,
    exchange: ExchangeIcon,
    payments: PaymentsIcon,
    radar: RadarIcon,
    transactions: TransactionsIcon,
    wallet: WalletIcon,
    search: SearchIcon,
    filter: FilterIcon,
    "payment-link": PaymentLinkIcon,
    "pie-chart": PieChartIcon,
    "shopping-cart": ShoppingCartIcon,
    "drop-down": DropDownIcon,
    "arrow-up": DropUpIcon,
    "arrow-down": ArrowDownIcon,
    "arrow-left": ArrowLeftIcon,
    "arrow-right": ArrowRightIcon,
};

const Icon = ({ name, ...restProps }) => {
    if (iconMap[name]) {
        const Comp = iconMap[name];
        return <Comp {...restProps} />;
    }

    return <></>;
};

export default Icon;
