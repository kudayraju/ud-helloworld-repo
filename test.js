node () {
    stage('Build') { 
		sh '''
			export M2_HOME= "/opt/maven"
    			//export PATH= "${M2_HOME}/bin:${PATH}"
			//echo "PATH = ${PATH}"
			//echo "M2_HOME = ${M2_HOME}"
			//mvn clean package
		'''
	}
	stage('Stage-Function-EG') { 
            uday()      
    }    
}

def uday() {
	println "This is the section for defining stage function"
}
