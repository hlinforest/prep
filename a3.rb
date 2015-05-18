def length_finder(input_array)
  temp_array = []
  input_array.each do |temp|
    i = input_array.index(temp)
    temp_array.insert(i, temp.length)
    i+=1
  end
  return temp_array
    
end