def non_duplicated_values(values)
  # Write your code here
  values.select do |temp|
    values.count(temp) == 1
  end
end