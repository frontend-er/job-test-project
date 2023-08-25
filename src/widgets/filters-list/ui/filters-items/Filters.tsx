import { filtersApi } from '~entities/filters';
import { Button } from '~shared/ui/button';
import { Input } from '~shared/ui/input';

type FiltersItemsProps = {
  onFilterClick: (filter: string) => void;
  onAmountFilterApply: (amount: { from: number, to: number }) => void;
};

export function FiltersItems(props: FiltersItemsProps) {
  const { onFilterClick, onAmountFilterApply } = props;

  const { data: filters, isLoading } = filtersApi.useGlobalFilters();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const from = Number(formData.get('from'));
    const to = Number(formData.get('to'));
    onAmountFilterApply({ from, to });
  };

  return (
    <div className="sidebar">
      <p>Filters</p>
      <div className="filter-list">
        {isLoading && 'Loading filters...'}

        {filters &&
          filters.length &&
          filters.map((filter) => {
            return (
              <button
                key={filter.name}
                className="filter-pill filter-default"
                type="button"
                onClick={() => {
                  onFilterClick(filter.name);
                }}
              >
                {filter.name}
              </button>
            )
          })}
      </div>
      <br />
      <p>Amount</p>
      <form className="filter-list"  onSubmit={handleFormSubmit}>
        <Input name='from' className='input' type="number" placeholder="From" />
        <Input name='to' className='input' type="number" placeholder="To" />
        <Button type="submit" >
          Apply
        </Button>
      </form>
    </div>
  );
}
