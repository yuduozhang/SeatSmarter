import csv
import json
import collections

class csvParser:
    def __init__(self,path):
        dataReader = csv.reader(open(path))
        
        self.fHandle = open('data.json','w')
        self.outputData(dataReader)
        
    def outputData(self,dataReader):
        mapping = {}
        catRow = dataReader.next()
        colData = collections.defaultdict(list)
        rowData = collections.defaultdict(list)
        
        #mapping ints to cats
        for i in range(len(catRow)):
            mapping[i] = catRow[i]
        
        rowCount = len(mapping)
        for row in dataReader:
            rowData[rowCount] = row
            rowCount -= 1
            
            for i in range(len(row)):
                if row[i].isdigit():
                    colData[i].append(int(row[i]))
                else:
                    colData[i].append(row[i])
        
        self.genJSON({"category":mapping,"rowData":rowData,"colData":colData})        
        
    def genJSON(self,output):
        json.dump(output,self.fHandle)
    
a = csvParser("testData.csv")