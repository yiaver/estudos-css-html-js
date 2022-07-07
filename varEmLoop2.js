const func1 = []
for (var i=0; i <100; i++){
    func1.push(function(){
        console.log(i)
    })
}

func1[3]()
func1[40]()
func1[97]()