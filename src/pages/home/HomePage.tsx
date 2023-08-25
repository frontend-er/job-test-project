import { useState } from 'react';
import cn from 'classnames';
import { FiltersItems } from '~widgets/filters-list';

import { GlobalJobsList } from '../../widgets/global-jobs-list';

type TabsState = {
  globalFeed?: boolean;
  filterFeed?: string;
  amountFeed?: {
    from?: number;
    to?: number;
  } | null;
};

export function HomePage() {

  const initTabsState: TabsState = {
    ...({ globalFeed: true }),
    ...({ filterFeed: '' }),
    ...({
      amountFeed: null
    })
  };

  const [tabs, setTabs] = useState<TabsState>(initTabsState);

  const onGlobalFeedClick = () => setTabs({ globalFeed: true });
  const onFilterFeedClick = (filter: string) => {
    setTabs({ globalFeed: false, filterFeed: filter })
  }
  const onAmountFilterApply = (amount: { from: number, to: number }) => {
    setTabs({ globalFeed: false, amountFeed: amount })
  }


  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">Job list</h1>
          <p>This app is for you to find and join a job of your dream!</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">
            <div className="feed-toggle">
              <ul className="nav nav-pills outline-active">
                <li className="nav-item">
                  <button
                    className={cn('nav-link', { active: tabs.globalFeed })}
                    type="button"
                    onClick={onGlobalFeedClick}
                  >
                    Global Feed
                  </button>
                </li>
                {tabs.filterFeed && (
                  <li className="nav-item">
                    <button
                      className={cn('nav-link', { active: tabs.filterFeed })}
                      type="button"
                    >
                      #{tabs.filterFeed}
                    </button>
                  </li>
                )}
                {tabs.amountFeed && (
                  <li className="nav-item">
                    <button
                      className={cn('nav-link', { active: tabs.amountFeed })}
                      type="button"
                    >
                      Amount filter
                    </button>
                  </li>
                )}
              </ul>
            </div>
            {tabs.filterFeed && (
              <GlobalJobsList
                query={{  filter: tabs.filterFeed }}
              />
            )}
            {tabs.globalFeed && (
              <GlobalJobsList  />
            )}
             {tabs.amountFeed && (
              <GlobalJobsList query={{  amountFilter: tabs.amountFeed }} />
            )}
          </div>
          <div className="col-md-3">
            <FiltersItems onFilterClick={onFilterFeedClick} onAmountFilterApply={onAmountFilterApply} />
          </div>
        </div>
      </div>
    </div>
  );
}
