require "pry"
require "sinatra"
require "sinatra/reloader"
# question1
def offer_rose (person)
  puts "Would you take this rose, #{person}, in exchange for giving an old beggar woman shelter from the bitter cold?"  
end

# question 2
town = {
  residents: ["Maurice", "Belle", "Gaston"],
  castle: {
    num_rooms: 47,
    residents: ["Robby Benson"],
    guests: ['birds']
  }
}
town.dig(:castle,:guests).unshift("Belle")
town[:castle].merge!(cook: "Mrs Potts")
# town[:catle] = {:num_rooms=>47, :residents=>["Robby Benson"], :guests=>["birds", :cook=>"Mrs Potts]}

#question 3
friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]
friends.each do |item|
  puts "Belle is friends with #{item}"
end

#question 4
lost_boys = [
  {name: 'Tootles', age: '11'},
  {name: 'Nibs', age: '9'},
  {name: 'Slightly', age: '10'},
  {name: 'Curly', age: '8'},
  {name: 'The Twins', age: '9'}
]
sum = []
lost_boys.each do |person|
  find_age = person[:age]
  sum << find_age
end
 total = sum.map(&:to_i)
 result = 0
 total.each do |num|
result += num
 end
 puts result
# sum.map(&:to_i)[11, 9, 10, 8, 9], result is 47 

# question 5
children = ['Wendy', 'John', 'Michael']
darling_children = []
 children.each do |name|
 index = children.index(name)
 darling_children << "#{index + 1} #{name} Darling"
end
puts darling_children
#['1 Wendy Darling', '2 John Darling', '3 Michael Darling']

# question 6
names = ["Belle", "Cogsworth", "Lumière", "Mrs. Potts"]
short_name = []
names.select do |short_word|
  if
  short_word.length <8
  short_name << short_word
  end
end
puts short_name;
# ["Belle", "Lumière"]

#question 7


def scream (number)
    if number == 0
        puts "crickets"
    end
    start_letter = "l"
    #for i in 2..n-1 describes iteration over a range from 2 to 1 less than n
    for i in 8 number do
        start_letter = start_letter.concat('ol')
    end
    puts start_letter
end
scream(7)